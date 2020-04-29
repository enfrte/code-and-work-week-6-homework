import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const vocab = [{id: 1, fi: "Kissa", en: "Cat"}, {id: 2, fi: "Koira", en: "Dog"}, {id: 3, fi: "Tee", en: "Tea"}, {id: 4, fi: "Kahvi", en: "Coffee"}, {id: 5, fi: "Talo", en: "House"}, {id: 6, fi: "Auto", en: "Car"}, {id: 7, fi: "Pallo", en: "Ball"}, {id: 8, fi: "Ovi", en: "Door"}];
  // create a new dataset from vocab
  const cardArray = [];
  vocab.forEach((currentValue, index, array) => {
    //console.log(currentValue.id);
    cardArray.push({pairId: currentValue.id, fi: currentValue.fi});
    cardArray.push({pairId: currentValue.id, en: currentValue.en});
  });
  const randomCardArray = cardArray.sort(() => Math.random() - 0.5);
  
  const [randomCards, setRandomCards] = useState(randomCardArray); // place to hold the card dataset
  const [turn, setTurn] = useState([]); // list of selected cards (up to two per turn)
  const [cardsSelected, setCardsSelected] = useState(0); // counts the number of cards selected per turn
  const [uniqueIds, setUniqueIds] = useState([]); // list of ids logged during each turn to make sure user doesn't click the same card twice
  const [correctIds, setCorrectIds] = useState([]); // list of correctly matched cards by id

  console.log("cardsSelected outside func", cardsSelected);
  console.log("turn", turn);
  //console.log("uniqueIds", uniqueIds);
  //console.log("correctIds", correctIds);

  const checkAnswer = () => {
    // save correct answers
    if (turn[0] === turn[1]) {
      uniqueIds.forEach( (id) => {
        setCorrectIds([...correctIds, id]);
      });
    }
  }

  const resetDeck = () => {
    //console.log("resetDeck called");
    setTimeout(() => { 
      // flip cards after 2 secs
      const cards = document.querySelectorAll(".game-card");
      cards.forEach((card) => { 
        //debugger;
        // keep correct answers visible
        if ((correctIds.indexOf(card.id) === -1)) {
          card.innerHTML = ""; // remove if not found
        }
      });
      setCardsSelected(0);
    }, 1000);
  }

  const cardHandler = (e) => {    
    const pairId = e.target.getAttribute("data-pairId");
    const word = e.target.getAttribute("data-word"); 
    const id = e.target.id; 
    
    // check if same card has been clicked twice
    if ((uniqueIds.indexOf(id) !== -1)) {
      console.log("!!Same card!!");
      return; // exit function
    }

    if (cardsSelected > 2) {
      console.log("!!More than 2 cards!!");
      return; // exit function
    }

    setCardsSelected(cardsSelected + 1);
    console.log("cardsSelected inside func", cardsSelected);

    setUniqueIds([...uniqueIds, id]);

    if (cardsSelected >= 2) {
      // remove the element text values
      checkAnswer();
      setTurn([]);      
      resetDeck(); // calls setCardsSelected(0);
      setUniqueIds([]);
    }
    else {
      setTurn([...turn, pairId]);
      e.target.innerHTML = word;
    }

  }
  
  return (
    <div className="app">
      <div className="deck-container">
        { randomCards.map( 
          (val, i) => <Card cardHandler={cardHandler} id={"card_"+i} key={i} pairId={val.pairId} word={(val.hasOwnProperty("en") ? val.en : val.fi)} /> 
        )}
      </div>
    </div>
  );
}

export default App;
