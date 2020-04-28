import React from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'

const App = () => {
  const element = <h1>Learn React</h1>;
  const text = "Hello " + "world";

  return (
    <div>
      {element}
      <p>{text}</p>
      <p>{2 + 2}</p>
      {[element, text, 1, "Leon"]}

      <Child name="Jami" yearOfBirth="2003" />
      <Child name="Saku" yearOfBirth="2005" />
      <Child name="Juliet" yearOfBirth="2010" />
      <Child name="Maikkis" yearOfBirth="1989" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
