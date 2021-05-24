import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Starry from './components/Starry'
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Starry />
  </React.StrictMode>,
  document.getElementById('root')
)

// serviceWorker.unregister();
