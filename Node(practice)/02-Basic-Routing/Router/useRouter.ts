


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

import express , {Application , Request , Response , Router} from 'express';

 const useRouter:Router=Router();

 useRouter.get("/" , (request:Request , response:Response)=>{
    response.status(200).json({msg:"welcom home"})
 })


 useRouter.post("/insert" , (request:Request , response:Response)=>{
    response.status(500).json({msg:"inserted data"})
 })


 export default useRouter