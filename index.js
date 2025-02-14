import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import urlRoutes from './routes/Url.route.js'
import connectMongoDB from './db/mongoDB.js'
import path from 'path'
import renderrouter from './routes/render.route.js'
dotenv.config()
const app = express()
app.set("view engine","ejs")
app.set("views",path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectMongoDB()
app.use('/api/v1/',urlRoutes)
app.use('/',renderrouter)

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server runing http://localhost:${PORT}`);
    
})