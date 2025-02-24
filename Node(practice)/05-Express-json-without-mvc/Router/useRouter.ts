import express , {Application , Request , Response , Router} from 'express'
const jsonfile=require('jsonfile')

const useRouter:Router=Router();

// const file="../05-Express-json-without-mvc/db/user.json"
const file="../05-Express-json-without-mvc/db/user.json"

useRouter.get("/" , (request: Request , response:Response)=>{
    // jsonfile.readFile(file , function(err:any , obj:any){
    //     if(err) console.log(err);
    //     response.json(obj);
        
    // })
  jsonfile.readFile(file , function(err:any , obj:any){
    if(err)
   response.json(obj)
  })
} )

export default useRouter