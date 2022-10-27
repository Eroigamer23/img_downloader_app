import React from 'react'

export const Home  = () => {
  return (
    <div style={{marginTop:'20px', textAlign:'initial'}}>
        Tools
        <ul style={{textAlign:'left', paddingInlineStart:'initial', listStylePosition:'inside', width: 'inherit'}}>
            <li><a href='/everia'> Everia Downloader</a></li>
            <li><a href='/micmicidol'> MicMicIdol Downloader</a></li>
        </ul>
    </div>
  )
}

export default Home