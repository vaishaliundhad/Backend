import productTable from "../db/ProductSchema";
import { Iproduct } from "../models/IProduct";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const createProduct = async (request: Request, response: Response) => {
    let { username, email, password, imageUrl, isActive } = request.body;
    try {
        const theproduct: Iproduct | null | undefined = await new productTable({
            username: username,
            email: email,
            password: password,
            imageUrl:imageUrl,
            isActive: isActive
        }).save()
        if (theproduct) {
            return response.status(200).json({
                data: theproduct,
                msg: "create product"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "something went wrong"
        })
    }

}


export const getAllproduct = async (request: Request, response: Response) => {
    try {
        let theproduct = await productTable.find()
        if (theproduct) {
            return response.status(200).json({
                data: theproduct,
                msg: "get all data"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "semonthing went wrong"
        })
    }
}


export const getOneUser = async (request: Request, response: Response) => {
    try {

        let { productid } = request.params;
        const mongouserid = new mongoose.Types.ObjectId(productid)
        let theuser: Iproduct | null | undefined = await productTable.findById(mongouserid)
        if (theuser) {
            return response.status(200).json(theuser)
              
        }
    }

    catch (err) {
        return response.status(500).json({
           
            msg:"something went wrong"
        })
    }
}

export const productUpdate = async(request:Request , response:Response)=>{
    let {productid}=request.params;
    let { username , email, password , imageUrl , isActive}=request.body;
   try{
       let mongoproductid = new mongoose.Types.ObjectId(productid);
       const theproduct : Iproduct| null|undefined = await productTable.findByIdAndUpdate(mongoproductid , {
        username:username, 
        email:email,
        password:password,
        imageUrl:imageUrl,
        isActive:isActive
       })
       if(theproduct){
        return response.status(200).json({
            data:theproduct,
            msg:"update successfully"
        })
       }
   }
   catch(error)
   {
    return response.status(500).json({
        msg:"something went erong"
    })
   }
}


export const deleteproduct = async(request:Request , response:Response)=>{
 try{
    let {productid}= request.params;
    let mongoproductid= new mongoose.Types.ObjectId(productid)
    let theproduct:Iproduct|null|undefined = await productTable.findByIdAndDelete(mongoproductid)
    if(theproduct)
    {
        return response.status(200).json({
            data:theproduct,
            msg:"delete successfully"
        })
    }
  
 }
 catch(err)
 {
    return response.status(500).json({
        msg:"semothing went wrong"
    })
 }
}