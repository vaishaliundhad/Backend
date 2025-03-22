import mongoose from "mongoose";
import { Iproduct } from "../models/IProduct";


const productSchema = new mongoose.Schema<Iproduct>({
    username:{type:String , requires:true},
    email:{type:String , require:true},
    password:{type:String , require:true},
    imageUrl:{type:String ,  require:true},
    isAdmin:{type:Boolean , default:false}
}, {timestamps:true})

const productTable = mongoose.model<Iproduct>("product" , productSchema)

export default productTable