import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName:{type:String  , required:true},
    productDescription :{type:String , required:true},
    productImage:{type:String , required:true},
    productPrice:{type:Number , required:true},
    productBrand:{type:String , required:true},
    productQuantity:{type:Number , required:true},

    //Reference to user
    user:{type:mongoose.Schema.Types.ObjectId , ref:'user'},

     //Reference to category
    category:{type:mongoose.Schema.Types.ObjectId , ref:'category' , required:true},
    
    isActive:{type:Boolean , required:true}
} , {timestamps:true})


const ProductTable = new mongoose.model('product' , ProductSchema);

export default ProductTable  