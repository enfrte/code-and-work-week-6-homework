import React, {useState} from 'react';
import './App.css';
/**
 *  Program a app with a button that adds a new random bingo number using state and an array. 
 *  Make it impossible to get the same number twice!
    EXTRA: Make your bingo balls pretty and create a reset button.
 */
function App() {
  const balls = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30, 31,32,33,34,35,36,37,38,39,40, 41,42,43,44,45,46,47,48,49,50, 51,52,53,54,55,56,57,58,59,60, 61,62,63,64,65,66,67,68,69,70, 71,72,73,74,75];
  const createRandomBalls = balls.sort(() => Math.random() - 0.5);

  const [randBalls, setRandBalls] = useState(createRandomBalls);
  const [drawnBalls, setDrawnBalls] = useState([]);
  const [currentBall, setCurrentBall] = useState(0);
  
  //console.log(drawnBalls);
    
  const getNewNumber = () => {
    setNewNumber();
  }
 
  const setNewNumber = () => {
    setDrawnBalls(drawnBalls.concat(randBalls[currentBall]));
    setCurrentBall(currentBall + 1);
  }

  return (
    <div className="App">
      <h1>Bingo game</h1>
      <button className="bingo-ball-draw" onClick={getNewNumber}>Draw number</button>
      <div className="bingo-ball-container">
        { drawnBalls.map( 
          (val, i) => <div className="bingo-ball" key={i}>{val}</div> 
        )}
      </div>
    </div>
  );
}

export default App;
