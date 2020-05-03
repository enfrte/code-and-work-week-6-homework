    import React, { useState } from 'react';
    import Button from "./Button";

    function App() {

      const [counter, setCounter] = useState(0); 
      console.log("counter", counter);

      /*if(counter > 2){
        console.log(counter, "counter is greater than 2:");
        document.querySelector("button").style.display = "none";
      }*/

      const buttonHandler = () => {
        //setCounter(counter + 1);
        setCounter((prev) => {
          if (prev < 2) {
            return prev + 1;            
          }
          return prev; 
        });
        
      };

      return (
        <div className="app">
          <div className="deck-container">
            <Button buttonHandler={buttonHandler} counter={counter} />
            <Button buttonHandler={buttonHandler} counter={counter} />
          </div>
        </div>
      );
    }

    export default App;
