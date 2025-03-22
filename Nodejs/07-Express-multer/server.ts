import express, {Application , NextFunction, Request , Response} from 'express';
import multer from 'multer';
import {log} from "console"
import dotenv from 'dotenv'
dotenv.config();



const hostName:string ='127.0.0.1';
const port:number =9988;
const app:Application = express();

app.use(express.json());
// configurates how the files are gonna be stored
const storage = multer.diskStorage({
    destination: function (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
     callback(null, 'uploads/');
 },
 filename: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
    //  const guid = guidGenerator();
     callback(null, Date.now() + '_' + file.originalname);
 }
});

//cloudinary

import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name:process.env.CLOUDNARY_NAME,
  api_key:process.env.CLOUDNARY_API_KEY,
  api_secret:process.env.CLOUDNARY_API_SECRET
})

export const uploadsImgCloudinarry = async (request:Request , response:Response , next:NextFunction)=>{
  console.log("cloudinary Confing:" , cloudinary.config());

  const file= request.file;
  const imgs=[];
  const uploads = await cloudinary.uploader.upload(file?.path as string , {
    resource_type:"auto"
  })
  imgs.push(uploads.secure_url)
  request.body.imgUrl = imgs;
  console.log("inside upload" , request.body.imgUrl);
  next()
  
  
}

const upload = multer({storage});

app.post("/upload",upload.single("myfile"), uploadsImgCloudinarry,(request:Express.Request,response:any)=>{
  log("inside upload",request.file)  
  if(!request.file)
    {
      return response.status(200).send("No File uploadded")
    }
    return response.status(400).send("File Uploadded")
})



app.listen(port , hostName,()=>{
    console.log(`Express server is started at http://${hostName}:${port}`);
})


