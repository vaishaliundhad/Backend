import express  from 'express'
import useRouter from './Basic_Routing/useRouter.js';

const hostname="127.0.0.1";
const port=9999;

const app=express();

app.get("/",(request, response)=>{
    response.status(200)
    response.json({
        msg:"hello world"
    });
});

app.use("/api/user",useRouter);

app.listen(port , hostname , ()=>{
    console.log(`express server start at the http://${hostname}:${port}`);
    
})