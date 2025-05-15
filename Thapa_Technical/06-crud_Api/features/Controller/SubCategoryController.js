import * as SubCategoryService from '../service/SubCategoryService.js'
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';
import SubCategoryValidationSchema from '../validation/SubCategoryValidation.js'

export const SubCategoryCreateController = async (request, response) => {
    try {
        const { error } = SubCategoryValidationSchema.validate(request.body);
        if (error) {
            return validationError(response, error.message)
        }
        const userIdFromToken = request.user?.id;

        if (!userIdFromToken) {
            return errorResponse(response, "user id not found in token", "insert failed");
        }

        let theSubCategory = await SubCategoryService.SubCreateCategoryService({
            ...request.body,
            user:userIdFromToken
        })
        console.log("theSubCategory", theSubCategory);

        return createResponse(response, theSubCategory, "SubCategory Create Successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "insert failed")
    }
}

//Read All SubCategory Controller
export const SubCategoryGetAllController = async (request, response) => {
    try {
        let theSubCategory = await SubCategoryService.SubGetAllCategoryService();
        return successResponse(response, theSubCategory, "All category fetched")
    }
    catch (err) {
        return errorResponse(response, err.message, "something went wrong")
    }
}

//create SubCategoryGetById Controller

export const SubCategoryGetByIdController = async (request, response) => {
    try {
        let theSubCategory = await SubCategoryService.SubGetByIDCategoryService(request.params.SubCategoryId);
        if (!theSubCategory) {
            return notFoundResponse(response, "Subcategory not found")
        }
        return successResponse(response, theSubCategory, "Subcategory fetched")
    }
    catch (err) {
        errorResponse(response, err.message, "something went wrong")
    }
}

//update Subcategory Controller
export const SubCategoryUpdateController = async (request, response) => {
    try {
        const userIdFromToken = request.user?.id;
        if (!userIdFromToken) {
            return errorResponse(response, "User Id not found in token");
        }
        let theSubCategory = await SubCategoryService.SubCategoryUpdateService(request.params.SubCategoryId, request.body);
        if (!theSubCategory) {
            return notFoundResponse(response, "SubCategory not found")
        }
        if (theSubCategory.user.toString() !== userIdFromToken) {
            return errorResponse(response, "you are not authorized to update this product")
        }
        return successResponse(response, theSubCategory, "category update success")
    }
    catch (err) {
        return errorResponse(response, err.message, "SubCategory update Success ")
    }
}

//Delete SubCategory Controller
export const SubCategoryDeleteController = async (request, response) => {
    try {
        const userIdFromToken = request.user?.id;
        if (!userIdFromToken) {
            return errorResponse(response, "User ID not found in token");
        }
        let theSubCategory = await SubCategoryService.SubCategoryDeleteService(request.params.SubCategoryId);
        if (!theSubCategory) {
            return notFoundResponse(response, "subcategory not found")
        }
        if (theSubCategory.user.toString() !== userIdFromToken) {
            return errorResponse(response, "You are not authorized to Delete this product")
        }
        return successResponse(response, theSubCategory, "subcategory delete successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "Delete failed")
    }
}