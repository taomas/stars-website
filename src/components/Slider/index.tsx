import React from 'react'
import './index.css'
import go from './animate'

export default function App() {
  return (
    <div id="main">
      <h1>something</h1>
      <div className="content">
        <p>
          You can press <kbd>▲</kbd> <kbd>▼</kbd> on your keyboard or swipe up/down to navigate.
          Mouse wheel works too.
        </p>
        <a href="https://codepen.io/theseventh" target="_blank">
          codepen
        </a>
        <a href="https://twitter.com/the_seventh_kek" target="_blank">
          twitter
        </a>
      </div>
      <div className="buttons">
        <button className="next" onClick={() => go(-1)}></button>
        <button className="prev" onClick={() => go(1)}></button>
      </div>
    </div>
  )
}
