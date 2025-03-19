
import express, {Application , Request , Response} from 'express';
import userRouter from './Router/useRouter';

const hostName:string ='127.0.0.1';
const port:number = 9900;

const app:Application = express();

app.get("/", (request:Request , response:Response)=>{
    response.status(200);
    response.json({
        msg:"welcome to Express server"
    });
});

app.use("/users", userRouter);

app.listen(port , hostName,()=>{
    console.log(`Express server is started at http://${hostName}:${port}`);
})


