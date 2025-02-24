// import express , {Application , Request , Response} from 'express';
// const hostName:string="127.0.0.1";
// const port:number=8899;



// const app:Application=express()

// app.get("/" , (request:Request , response:Response)=>{
//     response.status(200);
//     response.json({
//         msg:"server"
//     });
// });

// app.listen(port , hostName , ()=>{
//     console.log(`Express is started https://${hostName}:${port}`);
    
// })



import express , {Application , Request , Response} from 'express';
const hostName:string='127.0.0.1';
const port:number=999;

const app:Application=express();

app.get("/", (request :Request , response:Response)=>{
    response.status(200).json({msg:"welcome server"})
})


app.listen(port , hostName , ()=>{
    console.log(`express server is start http://${hostName}:${port}`);
    
})