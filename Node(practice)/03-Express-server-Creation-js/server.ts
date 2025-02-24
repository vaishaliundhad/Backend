import express , {Application, Request , Response, Router}  from 'express'
import useRouter from './Basic_Routing/useRouter';

const hostname:string="127.0.0.1";
const port:number=9999;

const app:Application=express();

app.get("/",(request:Request , response:Response)=>{
    response.status(200)
    response.json({
        msg:"hello world"
    });
});

app.use("/api/user",useRouter);

app.listen(port , hostname , ()=>{
    console.log(`express server start at the http://${hostname}:${port}`);
    
})