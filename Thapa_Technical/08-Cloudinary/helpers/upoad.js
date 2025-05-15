//cloudinary 

import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config();


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


export const uploadsImgcloudinary = async(request , response , next)=>{
    try{

        console.log("clodinary config" , cloudinary.config());
       
        const file = request.file;
        if(!file){
            return response.status(400).json({
                msg:"no file upload"
            })
        }
        const imgs=[];
        const uploads = await cloudinary.uploader.upload(file?.path , {
           resource_type:"auto"
        })
        imgs.push(uploads.secure_url)
        request.body.imgUrl = imgs;
        console.log("inside upload" , request.body.imgUrl);
        next()
    }
    catch(err){
      console.log("Error uploloding to cloudinary ");
      
    }

}
