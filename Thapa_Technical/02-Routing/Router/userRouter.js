import { Router } from "express";

const userRouter = Router();

userRouter.get("/home" , (request , response)=>{
   response.json({
    msg:"welcome home"
   })
})

userRouter.post("/insert" , (request , response)=>{
  response.json({
    msg:"insert user"
  })
})


export default userRouter