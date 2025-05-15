import express from 'express'
import dotenv from 'dotenv';
import { AppRoutes } from './router.js';
import './config/db.js'
import cors from 'cors';

//enviornment variable
dotenv.config({ path: "./.env" });

const app = express()

app.use(cors())

const hostName = "127.0.0.1";
const port = process.env.PORT || 9999;

app.use(express.json());

// App all routes
AppRoutes(app);

//start the server
app.listen(port, hostName, () => {
  console.log(`Epress server is started http://${hostName}:${port}`);

})
