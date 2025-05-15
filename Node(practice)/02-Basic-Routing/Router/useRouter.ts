


// import express , {Application , Request, Response , Router} from 'express'

// const useRouter:Router= Router()

// useRouter.get("/home" , (request:Request , response:Response)=>{
//     response.json({
//         msg:"welcome home"
//     })
// })

// useRouter.post("/insertUser" , (request:Request , response:Response)=>{
//     response.json({
//         msg:"insertes user"
//     })
// })


// export default useRouter

import { Request , Response, Router } from "express";


const userRouter:Router= Router()

userRouter.get("/home" , (request:Request , response:Response)=>{
  response.status(200).json({
   msg:"welcome home"
  })
})

userRouter.post("/insert" , (request:Request , response:Response)=>{
   response.status(200).json({
      msg:"inser user"
   })
})

export default userRouter