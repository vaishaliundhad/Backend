import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:"./.env"})

const dbUrl = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME;

mongoose.connect(dbUrl , {dbName:dbName})
.then(()=>{ console.log("database connection is ready....")})
.catch((err)=> console.log(err))
