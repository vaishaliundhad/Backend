import express from 'express';

const hostName ='127.0.0.1';
const port = 9999;

const app = express();

app.get("/", (request, response)=>{
    response.status(200);
    response.json({
        msg:"welcome to Express server"
    });
});

app.listen(port , hostName,()=>{
    console.log(`Express server is started at http://${hostName}:${port}`);
})



