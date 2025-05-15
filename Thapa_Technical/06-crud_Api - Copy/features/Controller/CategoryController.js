import * as CategoryService from '../service/CategoryService.js'
import { CategoryValidationSchema } from '../validation/CategoryValidation.js'
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';


//Create Category Controller
export const CreateCategoryController = async (request, response) => {
    try {
        const { error } = CategoryValidationSchema.validate(request.body);
        if (error) {
            return validationError(response, error.message)
        }

        const userIdFromToken = request.user?.id;

        if (!userIdFromToken) {
            return errorResponse(response, "user id not found in token", "insert failed");
        }

        let theCategory = await CategoryService.CreateCategoryService({
            ...request.body,
            user: userIdFromToken
        });
        return createResponse(response, theCategory, "category created successfully");
    }
    catch (err) {
        return errorResponse(response, err.message, "insert failed");
    }
};


//Read All Category Controller
export const GetAllControllerCategory = async (request, response) => {
    try {
        let theCategory = await CategoryService.GetAllCategoryService();
        return successResponse(response, theCategory, "All category fetch")
    }
    catch (err) {
        return errorResponse(response, err.message)
    }
}

//create GetById Category Controller
export const GetByIdControllerCategory = async (request, response) => {
    try {
        let theCategory = await CategoryService.GetByIdCategoryService(request.params.categoryId);
        if (!theCategory) {
            return notFoundResponse(response, "category not found")
        }
        return successResponse(response, theCategory, "category fatch")
    }
    catch (err) {
        errorResponse(response, err.message)
    }
}

// update Category Controller
export const UpdateControllerCategory = async (request, response) => {
    try {
        let theCategory = await CategoryService.UpdateCategorySerice(request.params.categoryId, request.body);
        if (!theCategory) {
            return notFoundResponse(response, "category not found")
        }
        return successResponse(response, theCategory, "category update success")
    }
    catch (err) {
        return errorResponse(response, err.message, "update faild")
    }
}

//Delete Category Controller
export const DeleteControllerCategory = async (request, response) => {
    try {

        let theCategory = await CategoryService.DeletedCategoryService(request.params.categoryId);
        if (!theCategory) {
            return notFoundResponse(response, "category not found")
        }
        return successResponse(response, theCategory, "category delete successfully")
    }
    catch (err) {
        return errorResponse(response, err.message, "delete faild")
    }
}