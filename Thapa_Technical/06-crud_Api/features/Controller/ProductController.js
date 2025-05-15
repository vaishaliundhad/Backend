import * as ProductService from '../service/ProductService.js'
import ProductValidationSchema from '../validation/ProductValidation.js';
import mongoose, { mongo } from 'mongoose';
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';




//create product Controller

export const CreateProductController = async (request, response) => {
    const session = await mongoose.startSession();
    session.startTransaction()
    try {
        //validation check
        const { error } = ProductValidationSchema.validate(request.body);
        if (error) {
            return validationError(response, error.message)
        }

        const userId = request.user.id;

        let theproduct = await ProductService.CreateProductService({
            ...request.body,
            user: userId
        } , session);
        console.log("theproduct", theproduct);
        return createResponse(response, theproduct, "product created successfully")
    }
    catch (err) {
        await session.abortTransaction(); //rollback
        session.endSession()
        return errorResponse(response, err.message, "insert failed")
    }
}

// GetAll product Controller
export const GetAllControllerProduct = async (request, response) => {
    try {

        // const query = {}

        // let theproduct = await Product.aggregate(pipeline);

        //$eq 
        // if(request.query.productBrand){
        //     query.productBrand = {$eq :request.query.productBrand};
        // }
        //

        //$nq
        // if(request.query.productBrand){
        //     query.productBrand ={$ne :request.query.productBrand}
        // }
        
        //$gt

        // if(request.query.productPrice){
        //     query.productPrice = {$gt :request.query.productPrice}
        // }

        //$lt

        // if(request.query.productPrice){
        //     query.productPrice = {$lt : request.query.productPrice}
        // }

        //$in



        // if (request.query.productBrand) {
        //     const brandArray = JSON.parse(request.query.productBrand);
        //     query.productBrand = { $in: brandArray };

        // }
        //$nin
        // if (request.query.productBrand) {
        //     const brandArray = JSON.parse(request.query.productBrand);
        //     query.productBrand = { $nin: brandArray };

        // }

        // $ and(&&)
        // http://localhost:8888/product?productPrice=1200&productBrand=["Nike","Addidas","puma"]
        // if (request.query.productBrand && request.query.productPrice) {
        //     query.$and = [
        //         { productPrice: { $lt: parseInt(request.query.productPrice) } },
        //         { productBrand: { $in: JSON.parse(request.query.productBrand) } }
        //     ]
        // }

        //$or (||)
        // http://localhost:8888/product?productPrice=1500&productBrand=["Nike","Addidas","puma"]

        // if (request.query.productPrice || request.query.productBrand) {
        //     query.$or = [
        //         request.query.productPrice ? { productPrice: { $gt: parseInt(request.query.productPrice) } } : {},
        //         request.query.productPrice ? { productBrand: { $in: JSON.parse(request.query.productBrand) } } : {}
        //     ]
        // }

        // Price Assending less to more
        // let sortoption = {}
        // if (request.query.sort === 'asc') {
        //     sortoption.productPrice = 1;
        // } else if (request.query.sort === 'desc') {
        //     sortoption.productPrice = -1;
        // }


        //pagination
        // const page = parseInt(request.query.page) || 1;
        // const limit = parseInt(request.query.limit) || 3;
        // const skip = (page - 1) * limit;

        //exists true
        // if(request.query.productDescriptionExists === 'false'){
        //     query.productDescription = {$exists:true};
        // }
        //exists false
        // if(request.query.productDiscountExists === 'false'){
        //     query.productDiscount ={$exists : false};
        // }

        //gte 
        // if (request.query.productPrice) {
        //     query.productPrice = { $gte: request.query.productPrice }
        // }

        //lte

        // if(request.query.productPrice){
        //     query.productPrice = {$lte : request.query.productPrice}
        // }

        //projection include and exclude
        //http://localhost:8888/product?excludefields=productName,productPrice

        // let projection = {};

        //  if(request.query.includefields){
        //     const includefields = request.query.includefields.split(',');
        //     includefields.forEach(includefields =>{
        //         projection[includefields] = 1;
        //     } )
        //  }

        //exclude

        // if(request.query.excludefields) {
        //     const excludefields = request.query.excludefields.split(',');
        //     excludefields.forEach(excludefields =>{
        //         projection[excludefields]=0;
        //     })
        // }

        //regex(pattern match for a strings)
        // http://localhost:8888/product?productDescription=toys

        // if (request.query.productDescription) {
        //     query.productDescription = { $regex: request.query.productDescription, $options: 'i' }
        // }

        //type check array and string

        // if(request.query.brandType){
        //     const typeAlias = request.query.brandType.toLowerCase();
        //     query.productBrand={$type: typeAlias};
        // }

        //type check int
        // if (request.query.priceType) {

        //     query.productPrice = { $type: request.query.priceType }
        // }



        //$size
        // if (request.query.productBrandSize) {
        //     const productBrandSize = parseInt(request.query.productBrandSize);
        //     query.productBrand = { $size: productBrandSize }; 
        // }

        //text
        //http://127.0.0.1:8888/product?search=toys
        // if (request.query.search) {
        //     query.$text = { $search: request.query.search }
        // }

        // const matchStage = {};

        // if (request.query.productBrand) {
        //     matchStage.productBrand = request.query.productBrand;
        // }

        // matches: http://localhost:8888/product?productBrand=Nike

        //groupstage
        // const groupstage = {
        //     $group: {
        //         _id: "$productBrand",
        //         totalPrice: { $sum: "$productPrice" },
        //         count: { $sum: 1 }
        //     }
        // }
        // const pipeline = [
        //     { $match: matchStage },
        //     {
        //         $lookup: {
        //             from: "users",
        //             localField: "user",
        //             foreignField: "_id",
        //             as: "userInfo"
        //         }
        //     },
        //     {
        //         $unwind: "$userInfo"
        //     }
        //     groupstage
        // ]

        //$lookup


        let theproduct;


        // if (Object.keys(matchStage).length > 0) {
        //     console.log("Applying filters", query);
        //     theproduct = await ProductTable.aggregate(pipeline);
        // }


        // if (pipeline.length > 0) {
        //     theproduct = await ProductTable.aggregate(pipeline);
        // }
        // else {
        //     console.log("No filters applied, returning all products.");
        //      theproduct = await ProductService.GetAllServiceProduct(query, sortoption, skip, limit, projection);
        //     theproduct = await ProductService.GetAllServiceProduct(query);
        // }
        theproduct = await ProductService.GetAllServiceProduct();
        return successResponse(response, theproduct, "product successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "something went wrong")
    }
}

//getbyid product Controller
export const GetByIdProductController = async (request, response) => {
    try {
        // let { productid } = request.params;
        let theproduct = await ProductService.GetOneServiceProduct(request.params.productid);
        if (!theproduct) {
            return notFoundResponse(response, "product not found")
        }
        return successResponse(response, theproduct, "product found")
    }
    catch (err) {
        return errorResponse(response, err.message, "something went wrong")
    }
}

//upadte product Controller
export const UpdateProductController = async (request, response) => {
    try {
        // let { productid } = request.params;

        const userIdFromToken = request.user?.id;
        if (!userIdFromToken) {
            return errorResponse(response, "User ID not found in token");
        }

        let theproduct = await ProductService.UpdateServiceProduct(request.params.productid, request.body);

        if (!theproduct) {
            return notFoundResponse((response, "product not found"))
        }
        // if (theproduct.user.toString() !== userIdFromToken) {
        //     return errorResponse(response, "You are not authorized to update this product");
        // }
        return successResponse(response, theproduct, "product update successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "failed update product")
    }
}

//delete product Controller
export const DeleteProductController = async (request, response) => {
    try {
        // let { productid } = request.params;
        const userIdFromToken = request.user?.id;
        if (!userIdFromToken) {
            return errorResponse(response, "User ID not found in token");
        }
        let theproduct = await ProductService.DeleteServiceProduct(request.params.productid);
        if (!theproduct) {
            return notFoundResponse(response, "Delete not found")
        }
        if (theproduct.user.toString() !== userIdFromToken) {
            return errorResponse(response, "You are not authorized to Delete this product");
        }
        return successResponse(response, theproduct, "product deleted successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "failed  deletd  product")
    }
}


