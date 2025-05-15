import { Router } from "express";

const userRouter = Router();

userRouter.get("/home" , (request , response)=>{
 response.status(200).json({
    msg:"welcome home"
 })
})

export default userRouter