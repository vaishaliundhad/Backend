import express from 'express'
import userRouter from './Router/userRouter.js';

const hostName="127.0.0.1";
const port=9988;

const app=express();

app.get("/" , (request , response)=>{
    response.status(200).json({
        msg:"welcome server"
    })
})
app.use("/user" , userRouter)

app.listen(port , hostName,()=>{
console.log(`Express server is started http://${hostName}:${port}`);

})
