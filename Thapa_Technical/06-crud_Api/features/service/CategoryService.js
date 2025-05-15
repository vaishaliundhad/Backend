import mongoose from "mongoose";
import CategoryTable from "../Model/CategorySchema.js";

//create category service
export const  CreateCategoryService = async(model)=>{
 const result = await CategoryTable.create(model)
 return result
}

//Read all category service

export const GetAllCategoryService = async()=>{
    return await CategoryTable.find().populate('user'); 
}

//Read Category by id service
export const GetByIdCategoryService = async (categoryId)=>{
    let mongoCategoryid = new mongoose.Types.ObjectId(categoryId)
    return await CategoryTable.findById(mongoCategoryid).populate('user')
}

//update Category service 

export const UpdateCategorySerice = async (categoryId , data)=>{
  let mongoCategoryid = new mongoose.Types.ObjectId(categoryId);
  return await CategoryTable.findByIdAndUpdate(mongoCategoryid , data , {new:true})
}

//Deleted Category service
export const DeletedCategoryService = async (categoryId) =>{
    let mongoCategoryid = new mongoose.Types.ObjectId(categoryId);
    return await CategoryTable.findByIdAndDelete(mongoCategoryid)
}