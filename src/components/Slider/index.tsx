import React, { useLayoutEffect } from 'react'
import './index.less'
import { init } from './animate'
import { slogan } from '../../config/index'

export default function App() {
  let go: Function
  useLayoutEffect(() => {
    go = init()
  }, [])

  return (
    <div id="main">
      <h1>{slogan}</h1>
      <div className="buttons">
        <button className="next" onClick={() => go(-1)}></button>
        <button className="prev" onClick={() => go(1)}></button>
      </div>
    </div>
  )
}
