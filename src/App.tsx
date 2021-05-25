import React from 'react'
import './App.css'
import Starry from './components/Starry'
import Slider from './components/Slider'
import Music from './components/Music'

function App() {
  return (
    <div className="App">
      <Starry />
      {/* {<Slider />} */}
      <Music />
    </div>
  )
}

export default App
