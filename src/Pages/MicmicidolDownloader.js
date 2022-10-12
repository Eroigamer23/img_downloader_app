import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { useDownloadEveria, useDownloadMicmicidol } from '../useApi'
import { setTabTitle } from '../Utils'

export const MicmicidolDownloader = () => {
    const [url, setURL] = useState(null)
    const [url2Send, setUrl2Send] = useState(null)
    const {data, isLoading, isFetching, error, status} = useDownloadMicmicidol(url2Send, setUrl2Send)
    // console.log(data)
    const handleSearch = () => {
      setUrl2Send(decodeURI(url))
    }
    const handlePaste = (e) => {
      e.preventDefault()
      setURL(decodeURI(e.clipboardData.getData('text')))
    }

  return (
    <div className='download-container flex-vertical flex-align-center'>
        {setTabTitle("Micmicidol Downloader", "Paste the URL for Micmicidol gallery that you want to download")}
        <h1 className='page-title' style={{color:'maroon'}}>Micmicidol Downloader</h1>
        <div className='flex-vertical flex-just-center content-fill-100'>
        {isLoading || isFetching && 
        <div className=' flex-vertical flex-align-center flex-just-center'style={{width:'100%'}}> 
          <CircleLoader color='maroon'/>
          Downloading Files...
        </div>}
        <input type={'text'} onPaste={handlePaste} value={url} onChange={obj => setURL(obj.currentTarget.value) } placeholder={'Enter URL here...'}/>
        <button className='dwl-btn' onClick={handleSearch} disabled={isLoading||isFetching}>
          <FontAwesomeIcon color='maroon' icon={faDownload}/>
        </button>
       {/* {data  && <h4>{data?.msg}</h4>} */}
      </div>

    </div>
  )
}
