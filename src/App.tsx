import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Starry from './components/Starry'
import Slider from './components/Slider'
import Music from './components/Music'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/music/slider" component={Slider}></Route>
          <Route exact path="/music/starry" component={Starry}></Route>
          <Route exact path="*">
            <Redirect to="/music/starry" />
          </Route>
        </Switch>
      </Router>
      <Music />
    </div>
  )
}

export default App
