import React from 'react'
import ReactDOM from 'react-dom'
import {ContextExample} from './ContextExample'
import UseEffectExample from "./UseEffectExample"
import UseRefExample from "./UseRefExample"

import "./App.css";

const App = () => {

  return (
    <div>
      <UseEffectExample />
      <ContextExample />
      <UseRefExample />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
