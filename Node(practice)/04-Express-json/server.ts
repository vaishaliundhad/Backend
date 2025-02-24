import express , {Application , Request , Response} from 'express'
import userRouter from './Router/userRouter';


const hostName:string="127.0.0.1";
const port:number=9999;

const app:Application=express();

app.get("/", (request:Request, response:Response)=>{
 response.status(200).json({msg:"welcome server"})
})

app.use("/api/user", userRouter)

app.listen(port , hostName , ()=>{
    console.log(`Express seerver is start http://${hostName}:${port}`);
    
})