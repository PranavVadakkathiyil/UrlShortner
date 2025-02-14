import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import urlRoutes from './routes/Url.route.js'
import connectMongoDB from './db/mongoDB.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectMongoDB()
app.use('/api/v1/',urlRoutes)
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server runing http://localhost:${PORT}`);
    
})