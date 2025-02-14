import express,{Router} from "express";
import { homePage } from '../controllers/viewer.contoller.js'
const renderrouter = Router()
renderrouter.get('/',homePage)
export default renderrouter