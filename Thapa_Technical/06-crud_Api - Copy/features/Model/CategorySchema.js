
import mongoose from "mongoose";

const CategorySchema  = new mongoose.Schema({
    CategoryName:{type:String , required:true , unique:true},
    CategoryDesciption:{type:String , required:true , unique:true},
    user:{type:mongoose.Schema.Types.ObjectId , ref:'user' , required:true},
    isActive:{type:Boolean , default:true}
}, {timestamps:true})

const CategoryTable = mongoose.model('category' , CategorySchema)
export default CategoryTable