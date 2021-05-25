import React, { useLayoutEffect } from 'react'
import './index.less'
import { init } from './animate'

export default function App() {
  useLayoutEffect(() => {
    init()
  }, [])

  return (
    <div id="main">
      <h1>something</h1>
      {/* <div className="content">
        <p>
          You can press <kbd>▲</kbd> <kbd>▼</kbd> on your keyboard or swipe up/down to navigate.
          Mouse wheel works too.
        </p>
      </div> */}
      {/* <div className="buttons">
        <button className="next" onClick={() => go(-1)}></button>
        <button className="prev" onClick={() => go(1)}></button>
      </div> */}
    </div>
  )
}
