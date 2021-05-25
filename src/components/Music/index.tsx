import React from 'react'

import './index.less'

export default function App() {
  return (
    <div className="music-container">
      <iframe
        frameBorder="no"
        marginWidth={0}
        marginHeight={0}
        width="330"
        height="110"
        src="//music.163.com/outchain/player?type=0&id=2097801896&auto=1&height=90"
      ></iframe>
    </div>
  )
}
