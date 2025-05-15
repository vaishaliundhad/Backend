import mongoose from "mongoose";
import SubCategoryTable from "../Model/SubCategorySchema.js";

//create SUbCategory service
export const SubCreateCategoryService = async(model)=>{
  const result = await SubCategoryTable.create(model)
  return result
}

//Read all category service
export const SubGetAllCategoryService = async()=>{
    return await SubCategoryTable.find().populate('category').populate('user');
}

//Read Category by id service
export const SubGetByIDCategoryService = async(SubCategoryId)=>{
 let mongoSubCategoryId = new mongoose.Types.ObjectId(SubCategoryId)
 return await SubCategoryTable.findById(mongoSubCategoryId)
}

//update Category service 
export const SubCategoryUpdateService = async(SubCategoryId, data)=>{
 let mongoSubCategoryId = new mongoose.Types.ObjectId(SubCategoryId)
 return await SubCategoryTable.findByIdAndUpdate(mongoSubCategoryId , data , {new:true})
}

//Deleted Category service
export const SubCategoryDeleteService = async(SubCategoryId)=>{
  let mongoCategoryid = new mongoose.Types.ObjectId(SubCategoryId)
  return await SubCategoryTable.findByIdAndDelete(mongoCategoryid)
}
