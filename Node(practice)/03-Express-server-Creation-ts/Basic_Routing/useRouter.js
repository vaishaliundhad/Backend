import express , { Router} from 'express'

const useRouter=Router();


useRouter.get("/home" , (request , response)=>{
    response.json({
        msg:"welcome home"
    })
})


useRouter.post("/insertUser",(request, response)=>{
    response.json({
        msg:"inserted user"
    })
})


export default useRouter