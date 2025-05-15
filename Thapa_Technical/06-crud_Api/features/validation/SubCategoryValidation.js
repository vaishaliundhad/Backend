import Joi from "joi";

const SubCategoryValidationSchema = Joi.object({
    SubCategoryName: Joi.string().min(3).max(50).required().messages({
        'string.base': "SubCategory name must be a string",
        'string.empty': "SubCategory name is required",
        'string.min': "SubCategory name must be at least 3 characrters",
        'string.max': "SubCategory name must be at most 50 characrters",
        'any.required': "SubCategory name is required"
    }),
    SubCategoryDesciption: Joi.string().min(10).max(200).required().messages({
        'string.base': 'SubCategory description must be a string',
        'string.empty': 'SubCategory description is required',
        'string.min': 'SubDescription must be at least 10 characters',
        'string.max': 'SubDescription must be at most 200 characters',
        'any.required': 'SubCategory description is required'
    }),
    user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": "User ID must be a valid MongoDB ObjectId",
        "any.required": "User ID is required"
    }),
    category: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": " Category Id must be a valid MongoDB ObjectId",
        "any.required": "Category ID is required"
    }),
    isActive: Joi.boolean().required().messages({
        "boolean.base": "isActive must ba a boolean",
        "any.required": "isActive status is required"
    })
})


export default SubCategoryValidationSchema