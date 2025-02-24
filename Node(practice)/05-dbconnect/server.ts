// import express , {Application , Request , Response} from 'express'
// import userRouter from './Router/userRouter';
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// // dotenv.config({path:"./.env"})
// dotenv.config({path:"./.env"})

// const hostName:string="127.0.0.1";
// const port:string| number |undefined =process.env.PORT || 999;
// // const port:string | number | undefined =process.env.PORT || 9900;
// const dburl:any=process.env.MONGO_DB_CLOUD_URL;
// const dbName:string|undefined =process.env.MONGO_DB_DATABASE;

// // mongoose.connect(dburl , {dbName:dbName})
// // .then(()=>{console.log("database connected")})
// // .catch((err)=>{console.log(err)})

// mongoose.connect(dburl , {dbName:dbName})
// .then(()=>{console.log("database connected")})
// .catch((err)=>{console.log(err)})

// const app:Application=express()

// app.get("/", (request:Request , response:Response)=>{
//     response.status(200).json({msg:"welcome server"})
// })

// app.use("/api/user", userRouter)
// app.listen(Number(port), hostName , ()=>{
//    console.log(`Express server is start http://${hostName}:${port}`);
   
// })


import express , {Application , Request , Response} from 'express'
import userRouter from './Router/userRouter'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
 dotenv.config({path:"./.env"})

 const hostName:string='127.0.0.1'
 const port: string|number|undefined =process.env.PORT || 9999;
 const dburl:any=process.env.MONGO_DB_CLOUD_URL;
 const dbName:string|undefined=process.env.MONGODB_DB_DATABASE;

 mongoose.connect(dburl , {dbName:dbName})
 .then(()=>{console.log("database connected")})
 .catch((err)=>{console.log(err)})
 const app:Application=express()

 app.use("/api", userRouter);

 app.get("/" , (reqest:Request , response:Response)=>{
    response.status(200).json({msg:"welcome server"})
 })

 app.listen(Number(port) , hostName , ()=>{
     console.log(`Express server start to http://${hostName}:${port}`);
     
 })
