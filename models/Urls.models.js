import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrlId:{
        type:String,
        required:true,
        unique:true

    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitistory:[{timeStamp:{type:Number}}]
},{timestamps:true})

const URLS = mongoose.model("url",urlSchema)

export default URLS