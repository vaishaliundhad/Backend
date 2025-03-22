import express , {Application , Request , Response} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './router/userRouter';
dotenv.config({path:"./.env"})

const app:Application=express();
const hostName="127.0.0.1"
const port:string|undefined|number=process.env.PORT || 9900;
const dburl:any=process.env.MONGODB_CLOUD_URL;
const dbname:string|undefined=process.env.MONGODB_DATABASE_NAME;

app.use(express.json())
mongoose.connect(dburl , {dbName:dbname})
.then(()=> {console.log("Database connection is ready")})
.catch((err) => {console.log(err)})


app.get("/", (request:Request , response:Response)=>{
    response.json({
        msg:"welcome home"
    })
})

app.use("/users" , userRouter)

import productRouter from './router/productRouter';
app.use("/product" , productRouter)

app.listen(port , ()=>{
console.log(`Express server is started http://${hostName}:${port}`);

})