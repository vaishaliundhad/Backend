import express , {Application, Request , Response, Router}  from 'express'
import useRouter from './Router/useRouter';

const hostname:string="127.0.0.1";
const port:number=9999;

const app:Application=express();

app.get("/",(request:Request , response:Response)=>{
    response.status(200)
    response.json({
        msg:"server start"
    });
});
app.use("/api/users" , useRouter);

app.listen(port , hostname , ()=>{
    console.log(`express server start at the http://${hostname}:${port}`);
    
})