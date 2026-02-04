import exp from 'express'
import{userApp} from './userAPI.js'
import{productApp} from './productAPI.js'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser' 
const app=exp()
const port = 4000;
//connect to db server
async function connectDB(){
    try{
    let dbRes = await connect('mongodb://localhost:27017/anuragdb-2')
    console.log("DB connection success")
    app.listen(port,()=>console.log("server listening in post 4000..."))
    }catch(err){
        console.log("error in DB connection: ",err)
    }
}
connectDB()
//body parser middleware
app.use(exp.json())
app.use(cookieParser())
//if path starts with /user-api,forward req to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error handling middlewares
function errorHandler(err, req, res, next){
  res.json({message: "Error: ", reason: err.message})
}

//send the error message to express 
app.use(errorHandler)