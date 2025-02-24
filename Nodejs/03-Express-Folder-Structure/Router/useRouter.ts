import express , {Application , Request , Response , Router} from 'express';
import { request } from 'http';

const userRouter:Router = Router();


//usege: get all user
//url:http://127.0.0.1:9999/users/api/users/home
//method:GET

userRouter.get("/home",(request:Request , response:Response) => {
    response.json({msg : "Hello , Welcome Home"});
})

//usege: inseted Record
//url:http://127.0.0.1:9999/users/api/users/insertUser
//method:post

//http://127.0.0.1:9999/api/users/insertUser
userRouter.post("/insertUser" , (request:Request , response:Response) => {
    response.json({
        msg : "Record Inserted..."
    })
})

export default userRouter