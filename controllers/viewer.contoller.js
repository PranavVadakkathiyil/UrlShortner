import URLS from "../models/Urls.models.js"
const homePage = async(req,res)=>{
    const urls = await URLS.find({})
    return res.render("home",{
        urls:urls
    })
}
export {homePage}