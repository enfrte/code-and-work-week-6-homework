import React, { useState } from 'react';
import CreateContextExampleComponent from "./CreateContextExampleComponent";

const MyContext = React.createContext(); // it can accept a default value

const ContextExample = (props) => {

  const [obj, setObj] = useState({
    name: "Leon",
    age: 123,
    prop: "random"
  });

  return (
      <MyContext.Provider value={
        {
          state: obj,
          setState: setObj
        }
      }>
        <div className="app">
          <h1>ContextExample</h1>
          <p>You can call values from createContext from anywhere without having to pass them as props.</p>
          <CreateContextExampleComponent />
        </div>
      </MyContext.Provider>
  );
}

export { MyContext, ContextExample };