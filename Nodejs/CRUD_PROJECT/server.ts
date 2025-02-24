import express , {Request  , Response , Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({path :"./.env"})

const hostName:string="127.0.0.1"
const port:string | number|undefined = process.env.PORT || 9900;
const dburl:any=process.env.MONGO_DB_CLOUD_URL;
const dbName:any=process.env.MONGO_DB_DATABASE;

const app:Application=express()
app.use(express.json())

mongoose.connect(dburl , {dbName:dbName})
 .then(()=> {console.log("database connected is ready") })
 .catch((err)=>{console.log(err)})

//mongodb connect
 if(port){
    app.listen(Number(port) , ()=>{
        mongoose.connect(dburl , {dbName:dbName})
        .then((dbresponse)=>{
            console.log("connection established....");
            
        })
        .catch((error)=>{
            console.log(error);
            process.exit(0);
            
        })
    })
 }

 import userRouter from './Router/userRouter'
 app.use("/user" , userRouter)

 //server start
 app.listen(Number(port) , hostName , ()=>{
    console.log(`Express server is started http://${hostName}:${port}`)
    
 })