import express, {Application} from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config({path:"./.env"})

const app:Application=express();
app.use(express.json());
const hostname:string="127.0.0.1";
const port:string | number | undefined =process.env.PORT || 9900;
const dbUrl:any= process.env.MONGO_URL;
const dbName:string | undefined=process.env.MONGDB_DATABASE;


mongoose.connect(dbUrl , {dbName:dbName})
.then(()=>{console.log("database connection is ready")})
.catch((err)=>{console.log(err)})

if(port)
{
    app.listen(Number(port), ()=>{
          if(dbUrl && dbName)
          {
            mongoose.connect(dbUrl , {dbName:dbName})
            .then((dbresponse)=>{
                console.log("connection is ready");
                
            })
            .catch((err)=>{
                console.log(err);
                
            })
          }
    })
}

import groupRouter from './Router/groupRouter';
app.use("/group", groupRouter);

app.listen(Number(port) , hostname , ()=>{
console.log(`express server is started http://${hostname}:${port}`);

})