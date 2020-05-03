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
  const [selected, setSelected] = useState([]); // list of selected cards (up to two per turn)
  const [countSelected, setCountSelected] = useState(0); // counts the number of cards selected per turn
  const [uniqueIds, setUniqueIds] = useState([]); // list of ids logged during each turn to make sure user doesn't click the same card twice
  const [correctIds, setCorrectIds] = useState([]); // list of correctly matched cards by id
  
  const createShowState = () => {
    // create initial state
    return randomCards.reduce((object, val, i) => {
        object['card_' + i] = false;
        return object;
    }, {});
  };

  const [showState, setShowState] = useState( createShowState() );

  const resetDeck = () => {
    setTimeout(() => { 
      // flip cards after 2 secs
      uniqueIds.forEach((id, i, array) => {
        setShowState({ ...showState, [id]: !showState[id] }); // replace the values of the objects with the same properties
      });
    }, 1000);
  }

  const cardHandler = ev => {
    const pairId = ev.target.getAttribute("data-pairId");
    const id = ev.target.id;

    setCountSelected((prev) => {
      if (prev < 2) {
        // flip the cards
        setShowState({ ...showState, [id]: !showState[id] }); // showState will have a value similar to this: // {card_0: true, card_1: true}
        setUniqueIds([...uniqueIds, id]);
        setSelected([...selected, pairId]);
        return prev + 1;            
      }
    });
  };

  if (countSelected === 2) {
    console.log("countSelected === 2 - selected", selected);
    // selected never has 2 array items!
    if (selected[0] === selected[1]) {
      setCorrectIds([...correctIds, uniqueIds]); // concat 
      setUniqueIds([...uniqueIds, []]); // reset the array
      console.log("correctIds", correctIds); // never called 
      console.log("uniqueIds", uniqueIds);
    } else {
      console.log("else uniqueIds", uniqueIds); // always called
    }
    resetDeck();
    setCountSelected(0)
  }
  //console.log("countSelected", countSelected);
  //console.log("selected", selected);
  //console.log("uniqueIds", uniqueIds);
  //console.log("correctIds", correctIds);
  //console.log("showState", showState);

  return (
    <div className="app">
      <div className="deck-container">
        { randomCards.map( 
          (val, i) => <Card cardHandler={cardHandler} id={'card_' + i} key={i} pairId={val.pairId} word={val.hasOwnProperty('en') ? val.en : val.fi} show={showState['card_' + i]} />
        )}
      </div>
    </div>
  );
}


export default App;
