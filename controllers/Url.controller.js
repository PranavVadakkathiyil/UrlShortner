import { nanoid } from "nanoid/non-secure"
import URLS from "../models/Urls.models.js"
const handleCreateUrlShort = async(req,res)=>{
    const {LargeUrl} = req.body
    if(!LargeUrl) return res.json({message:"Enter LargeUrl"})
    const shortUrl = nanoid(5)
    const createurl = await URLS.create({
        shortUrlId:shortUrl,
        redirectUrl:LargeUrl,
        visitistory:[]
    })
    return res.status(201).json({Message:"Success",createurl})
    
}
const handleRedirectUrl = async(req,res)=>{
    const {shortId} = req.params.shortId
    const response = await URLS.findOneAndUpdate({shortId},{
        $push:{
            visitistory:{
                timeStamp:Date.now()
            }
        }
    })
    res.redirect(response.redirectUrl)
}

const visitHistory = async(req,res)=>{
    const {shortId} = req.params.shortId
    const shortUrl = await URLS.findOne({shortId})
    console.log(shortUrl);
    
    res.json({
        message:"success",
        totalClick:shortUrl.visitistory.length,
        visitHistory:shortUrl.visitistory
    })
}


export {handleCreateUrlShort,handleRedirectUrl,visitHistory}
