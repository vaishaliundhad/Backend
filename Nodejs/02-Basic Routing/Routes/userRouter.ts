// import  { Request , Response , Router} from 'express';


// const userRouter:Router = Router();

// userRouter.get("/home",(request:Request , response:Response) => {
//     response.json({msg : "Hello , Welcome Home"});
// })

// http://127.0.0.1:8899/api/users/insertUser
// userRouter.post("/insertUser" , (request:Request , response:Response) => {
//     response.json({
//         msg : "Record Inserted..."
//     })
// })

// export default userRouter

import { Request , Response , Router } from "express";


const userRouter:Router=Router();

// 127.0.0.1:8899/user/home
userRouter.get("/home" , (request:Request , response:Response)=>{
    response.json({
        msg:"welcome home"
    })
})
// 127.0.0.1:8899/user/insertuser
userRouter.post("/insertuser" , (request:Request , response:Response)=>{
      response.json({
        msg:"insrted record"
      })
})


export default userRouter