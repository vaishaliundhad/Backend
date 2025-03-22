import express , {Application , Request , Response} from 'express';
import connection from './db/config';
import todoRouter from './Router/todoRouter'
import { urlencoded } from 'body-parser';



const hostName:string = "127.0.0.1";
const port:number = 9977;

const app:Application = express();

app.get("/" , (request:Request , response:Response) => {
    response.status(200);
    response.json({
        msg : "Welcome to Expresss Server"
    });
});

app.use(express.json());
app.use(urlencoded({extended : true}))
app.use('/todos',todoRouter)

connection.sync().then(()=>{
    console.log("Database Successfully connected");
    
})
.catch((err)=>{
    console.log("Error" , err);
    
})

app.listen(port , hostName , () => {
    console.log(`Express Server is started at http://${hostName}:${port}`);
});

