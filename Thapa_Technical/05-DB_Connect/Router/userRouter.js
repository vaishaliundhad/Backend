import { Router } from "express";

const userRouter = Router();

userRouter.get("/" ,(request , response)=>{
   response.status(200).json({
    msg:"welcome home 2"
   })
})

userRouter.post("/insert" , (response , request)=>{
 response.status(200).json({
    msg:"inserted data"
 })
})

export default userRouter