import express, {Application , Request , Response , Router} from 'express'

const  userRouter:Router=Router();

userRouter.get("/home" , (request:Request , response:Response)=>{
    response.json({msg:"welcome home"})
})

// userRouter.post("/insertUser" , (request:Request , response:Response)=>{
//     response.json({msg:"inserted data"})
// })


userRouter.post("/insertUser" , (request:Request , response:Response)=>{
    response.json({
        msg:"insertes user"
    })
})

export default userRouter
