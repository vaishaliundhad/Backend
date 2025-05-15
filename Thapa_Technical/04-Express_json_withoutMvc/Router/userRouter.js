import express from 'express';
import jsonfile from 'jsonfile'
const userRouter = express.Router();

const file ="D:/Full Stack/Backend/Thapa_Technical/04-Express_json_withoutMvc/db/user.json"

userRouter.get("/" , (request , response)=>{
  jsonfile.readFile( file , function (err , obj){
    if(err)
        console.log(err);
    else
    response.json(obj)
        
  })
})

export default userRouter