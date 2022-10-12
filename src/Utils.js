import { Helmet } from "react-helmet"

export const getFileName = (url) => {
    let url2use = url.replace(/\/+$/, '')
    const trimAfter = url2use.lastIndexOf("/") > -1 ? url2use.lastIndexOf("/") : 0
    let imgName = url2use.slice(trimAfter + 1)
    if(imgName.includes(".")){
        imgName = imgName.slice(0, imgName.lastIndexOf("."))
    }
    // console.log(url2use, imgName)
    return imgName 
}

export const setTabTitle = (title, description) => {
    return <Helmet>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Helmet>
}