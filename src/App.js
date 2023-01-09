import React from 'react'
import Covid from './component/covid'
import State from './component/state'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Covid/>}/>
        <Route exact path="/AN" element={<State/>}/>
      </Routes>
    </Router>
  )
}

export default App
