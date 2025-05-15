    // import express , {Application , Request , Response } from 'express';
    // const hostName:string="127.0.0.1";
    // const port:number=9999;

    // const app:Application=express();

    // app.get("/" , (request:Request , response:Response)=>{
    //     response.status(200);
    //     response.json({
    //         msg:"welcome server"
    //     });
    // });


    // app.listen(port , hostName ,()=>{
    // console.log(`Express server is started http://${hostName}:${port}`);
    
    // })

import express , {Application , Request , Response} from 'express'
const hostName:string = "127.0.0.1"
const port:number=9999;

const app:Application=express()


app.get("/" , (request:Request , response:Response)=>{
    response.status(200).json({
        msg:'welcome server'
    })
})

app.listen(port , hostName ,()=>{
    console.log(`server is started ${hostName}:${port}`);
    
})