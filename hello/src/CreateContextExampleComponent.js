import React, { useContext } from 'react';
import { MyContext } from "./ContextExample";
//import { ContextExample } from "./ContextExample";

function CreateContextExampleComponent() {

  const {state, setState} = useContext(MyContext); // note MyContext was imported 


  return (
    <div className="">
      <button onClick={() => setState(state => ({...state, name: "Noel", age: 321}))
}>Change details</button>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}

export default CreateContextExampleComponent;
