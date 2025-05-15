import { notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';
import ProductTable from '../../features/Model/ProductSchema.js';

export const OnlyProductEdit = async (request, response, next) => {
    try {
       const userId = request.user.id;
       const product = await ProductTable.findById(request.params.productid);

       if(!product){
        return notFoundResponse(response , "product not found");
       }
       if(product.user.toString() !== userId){
         return notFoundResponse(response , "you are not authorized to action");
       }
       next();
    }
    catch(error){
        return errorResponse(response , error.message)
    }
}