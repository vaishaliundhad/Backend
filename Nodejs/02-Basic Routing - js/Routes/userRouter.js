import express from 'express';

const useRouter = express.Router();

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