import Joi from "joi";

const userValidationSchema = Joi.object({
    userName: Joi.string().min(3).max(30).required().messages({
        "string.empty": "userName is required",
        "string.min": "userName must be at least 3 characters long",
        "string.max": "userName must be at most 30 characters long",
        "any.required": "userName is required"
    }),
    email: Joi.string().email().required().messages({
        "string.email": "email must be a valid email address",
        "any.required": "email is required"
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "password must be at least 6 characters long",
        "any.required": "password is required"
    }),
   
    role: Joi.string().valid("buyer" , "seller" , "admin").optional().messages({
    "any.only":"role must be one og buyer , seller ,  ort admin "
    })
})


export default userValidationSchema;