import { notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';
import CategoryTable from "../../features/Model/CategorySchema.js";

export const OnlyCategoryEdit = async (request, response, next) => {
    try {

        const userId = request.user.id
        if (!userId) {
            return notFoundResponse(response, "User ID not found");
        }

        const category = await CategoryTable.findById(request.params.categoryId);

        if (!category) {
            return notFoundResponse(response, "Category not found");
        }

        if (category.user.toString() !== userId) {
            return notFoundResponse(response, "You are not authorized to  action");
        }
        next();
    } catch (error) {
        return errorResponse(response, error.message);
    }
};
