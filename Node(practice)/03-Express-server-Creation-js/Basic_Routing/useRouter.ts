import express , {Application, Request , Response, Router} from 'express'

const useRouter:Router=Router();


useRouter.get("/home" , (request:Request , response:Response)=>{
    response.json({
        msg:"welcome home"
    })
})


useRouter.post("/insertUser",(request:Request , response:Response)=>{
    response.json({
        msg:"inserted user"
    })
})


export default useRouter