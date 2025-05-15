import  express from 'express'

const hostName ="127.0.0.1";
const port =9999;

const app = express()

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