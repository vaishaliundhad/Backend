import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:"./.env"});

const hostName ="127.0.0.1";
const port = process.env.PORT || 8888;
const dbUrl = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME;

mongoose.connect(dbUrl , {dbName:dbName})
.then(()=> {console.log("Database connection is ready......................")})
.catch((err)=>{console.log(err)})    

const app = express();

app.get("/" , (request , response)=>{
   response.status(200).json({
    msg:"welcome home"
   })
})

import userRouter from './Router/userRouter.js';
app.use("/user" , userRouter)

app.listen(port , hostName , ()=>{
console.log(`Express server is started http://${hostName}:${port}`);

})