import mongoose from "mongoose";
import ProductTable from '../Model/ProductSchema.js'


//create product service
export const CreateProductService = async ({ productName, productDescription, productImage, productPrice, productBrand, productQuantity, isActive, user, category , session }) => {
    return await new ProductTable({
        productName,
        productDescription,
        productImage,
        productPrice,
        productBrand,
        productQuantity,
        isActive,
        user,
        category
    }).save({session})
}

// get a all product service
// export const GetAllServiceProduct = async (query = {}, sortoption = {} , skip=0 , limit = 2 , projection ={}) => {
// export const GetAllServiceProduct = async (query = {}, sortoption = {} , projection ={}) => {
export const GetAllServiceProduct = async () => {
    // return await ProductTable.find(query , projection).sort(sortoption).skip(skip).limit(limit).populate('user' , 'userName').populate('category' , 'CategoryName');
    // return await ProductTable.find(query , projection).sort(sortoption).populate('user' , 'userName').populate('category' , 'CategoryName');
    const product= await ProductTable.find().populate('user' , 'userName').populate('category' , 'CategoryName');
    console.log("Products found:", product.length);
    return product
   
}

// get by id product service
export const GetOneServiceProduct = async (productid) => {
    let mongoProductId = new mongoose.Types.ObjectId(productid)
    return await ProductTable.findById(mongoProductId).populate('user').populate('category');
}

// update a product service
export const UpdateServiceProduct = async (productid, data) => {
    let mongoProductId = new mongoose.Types.ObjectId(productid);
    return await ProductTable.findByIdAndUpdate(mongoProductId, data, { new: true })
}

// delete a product service
export const DeleteServiceProduct = async (productid) => {
    let mongoProductId = new mongoose.Types.ObjectId(productid);
    return await ProductTable.findByIdAndDelete(mongoProductId);
}

// service/ProductService.js

