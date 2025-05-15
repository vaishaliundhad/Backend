import * as ProductService from '../service/ProductService.js'
import ProductValidationSchema from '../validation/ProductValidation.js';
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';

//create product Controller

export const CreateProductController = async (request, response) => {
    try {
        //validation check
        const { error } = ProductValidationSchema.validate(request.body);
        if (error) {
            return validationError(response, error.message)
        }

        const userIdFromToken = request.user.id;
        if (!userIdFromToken) {
            return errorResponse(response, "user id not found in token")
        }
        let theproduct = await ProductService.CreateProductService({
            ...request.body,
            user: userIdFromToken
        });
        console.log("theproduct", theproduct);
        return createResponse(response, theproduct, "product created successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "insert failed")
    }
}

// GetAll product Controller
export const GetAllControllerProduct = async (request, response) => {
    try {
        let theproduct = await ProductService.GetAllServiceProduct();
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
        let theproduct = await ProductService.UpdateServiceProduct(request.params.productid, request.body);
        if (!theproduct) {
            return notFoundResponse((response, "product not found"))
        }
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
        let theproduct = await ProductService.DeleteServiceProduct(request.params.productid);
        if (!theproduct) {
            return notFoundResponse(response, "product not found")
        }
        return successResponse(response, theproduct, "product deleted successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "failed  deletd  product")
    }
}
