import Joi from 'joi';

const ProductValidationSchema = Joi.object({
    productName: Joi.string().min(3).max(100).required().messages({
        "string.base": "product name must be a string",
        "string.empty": "product is required",
        "string.min": "product name must  be at least 3 characters",
        "string.max": "product name must be at less than or equal to 100 charactor",
        "any.required": "product name is required"
    }),

    productDescription: Joi.string().min(10).max(500).required().messages({
        "string.empty": "product description is required",
        "string.min": "Description should be at least 10 characters",
        "string.max": " Description must be less than or equal to  500 charactor",
        "any.required": "product Decription is required"
    }),
    productImage: Joi.string().uri().required().messages({
        "string.empty": "Product image URL is required",
        "string.uri": "Product image must be a valid URL",
        "any.required": "Product image is required"
    }),
    productPrice: Joi.number().min(0).required().messages({
        "number.base": "Price must be a number",
        "number.min": "Price cannot be negative",
        "any.required": "Product price is required"
    }),
    productBrand: Joi.array().items(Joi.string().min(2).max(50)).required().messages({
        "array.base": "Product brand must be an array",
        "array.min": "Product brand must contain at least 2 items",
        "array.max": "Product brand can contain at most 50 items",
        "any.required": "Product brand is required",
    }),
    productQuantity: Joi.number().min(1).required().messages({
        "number.base": "Quantity must be a number",
        "number.min": "Quantity must be at least 1",
        "any.required": "Product quantity is required"
    }),
    user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": "User ID must be a valid MongoDB ObjectId",
        "any.required": "User ID is required"
    }),

    category: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": " Category Id must be a valid MongoDB ObjectId",
        "any.required": "Category ID is required"
    }),
    // user: Joi.string().uuid().required().messages({
    //     "string.uuid": "UID must be a valid UUID",
    //     "any.required": "UUID is required"
    // }),

    // category: Joi.string().uuid().required().messages({
    //     "string.uuid": "UID must be a valid UUID",
    //     "any.required": "UUID is required"
    // }),
    
    isActive: Joi.boolean().required().messages({
        "boolean.base": "isActive must ba a boolean",
        "any.required": "isActive status is required"
    })
})

export default ProductValidationSchema