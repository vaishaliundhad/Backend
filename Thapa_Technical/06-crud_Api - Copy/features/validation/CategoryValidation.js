import Joi from 'joi';

export const CategoryValidationSchema = Joi.object({
    CategoryName: Joi.string().min(3).max(50).required().messages({
        'string.base': "Category name must be a string",
        'string.empty': "Category name is required",
        'string.min': "Category name must be at least 3 characrters",
        'string.max': "Category name must be at most 50 characrters",
        'any.required': "Category name is required"
    }),
    CategoryDesciption: Joi.string().min(10).max(200).required().messages({
        'string.base': 'Category description must be a string',
        'string.empty': 'Category description is required',
        'string.min': 'Description must be at least 10 characters',
        'string.max': 'Description must be at most 200 characters',
        'any.required': 'Category description is required'
    }),
    user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": "User ID must be a valid MongoDB ObjectId",
        "any.required": "User ID is required"
    }),
    isActive: Joi.boolean().required().messages({
        "boolean.base": "isActive must ba a boolean",
        "any.required": "isActive status is required"
    })
})