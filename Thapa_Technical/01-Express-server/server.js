import express from 'express';

const hostname="127.0.0.1";
const port=9988;

const app=express();

app.get("/" , (request , response)=>{
  response.status(200).json({
    msg:"welome server"
  })
  console.log("welcome server");
  
})

import userRouter from './Router/userRouter';
app.use("/user" , userRouter)

app.listen(port , hostname , ()=>{
  console.log(`Express server is started http://${hostname}:${port}`);
  
})