import express, { response } from 'express';
import useRouter from './Routes/userRouter.js';

const hostname='127.0.0.1';
const port =9999;

const app=express()

app.get('/',(request, response)=>{
    response.json({
        msg:"welcome server"
    })
})

app.use("/user",useRouter)

app.listen(port , ()=>{
    console.log(`express server is satated at http://${hostname}:${port}`);
    
})

