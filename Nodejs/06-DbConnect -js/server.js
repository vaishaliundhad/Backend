import express from 'express';
import userRouter from './Routes/userRouter.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:"./.env"}); 

const hostName = "127.0.0.1";
const port = process.env.PORT || 9999;
const dbUrl=process.env.MONGO_DB_CLOUD_URL;
const dbName = process.env.MONGO_DB_DATABASE;

mongoose.connect(dbUrl ,{dbName:dbName})
.then(()=>{console.log("Database Connection is Ready..")})
.catch((err)=>{console.log(err)})

const app = express();

app.get("/" , (request, response) => {
    response.status(200);
    response.json({
        msg : "Welcome to Expresss Server"
    });
});

// router Configuration
app.use("/api/users", userRouter);

app.listen(port, hostName , () => {
    console.log(`Express Server is started at http://${hostName}:${port}`);
});

