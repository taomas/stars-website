import React from 'react'
import { slogan } from '../../config/index'

import './index.less'

export default function App() {
  return (
    <div>
      <h1>{slogan}</h1>
      <div>
        <div id="start1" />
        <div id="start2" />
        <div id="start3" />
      </div>
    </div>
  )
}
