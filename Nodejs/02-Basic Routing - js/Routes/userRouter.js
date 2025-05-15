import { Router } from "express";

const useRouter=Router()

useRouter.get('/home',(request,response)=>{
    response.json({
        msg:"Home page"
    })
});

useRouter.post('/insertUser',(request,response)=>{
    response.json({
        msg:" inserted data"
    })
});

export default useRouter;