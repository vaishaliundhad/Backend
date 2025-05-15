import express from 'express'

const hostName="127.0.0.1";
const port=9999;

const app=express();

app.get("/" , (request , response)=>{
     response.status(200).json({
        msg:"welcome home"
     })
})

app.listen(port , ()=>{
console.log(`Express server is started http://${hostName}:${port}`);

})