import express , {Application , Request , Response} from 'express';
import useRouter from './Router/useRouter';

const hostName:string="127.0.0.1"
const port:number=9999

const app:Application=express()

app.get("/" , (request:Request , response:Response)=>{
    response.status(200)
    response.json({
        msg:"welcome server"
    })
})

app.use("/api/users", useRouter)

app.listen(port , hostName , ()=>{
    console.log(`Express is started http://${hostName}:${port}`);
    
})