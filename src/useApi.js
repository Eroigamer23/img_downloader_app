import axios from "axios";
import { BASE_URL } from "./Constants";
import {useQuery} from 'react-query'
import JSZip from "jszip";
import { saveAs } from "file-saver";
import fileDownload from "js-file-download";
import { getFileName } from "./Utils";


export const download_api = axios.create({
    baseURL:BASE_URL,
    responseType:"blob"
})

export const useDownloadEveria = (data, setURL) => {
    const URL = 'everiaDownloader'
    return  useQuery('everiaDownloader', async() => {
        const res =  await download_api.get(URL, {
            params:{
                url:data
            },   
        })
        setURL(null)
        // console.log(res.data)
        
        fileDownload(res.data, `${getFileName(data.trim())}.zip`)
        return "Downloaded"
    },{
        enabled:!!data
    })
}

export const useDownloadMicmicidol = (data, setURL) => {
    const URL = 'micmicidolDownloader'
    return  useQuery('micmicidolDownloader', async() => {
        const res =  await download_api.get(URL, {
            params:{
                url:data
            },   
        })
        setURL(null)
        // console.log(res.data)
        
        fileDownload(res.data, `${getFileName(data.trim())}.zip`)
        return "Downloaded"
    },{
        enabled:!!data
    })
}