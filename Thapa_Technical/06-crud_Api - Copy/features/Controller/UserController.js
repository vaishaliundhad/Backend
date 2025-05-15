import * as UserService from '../service/UserService.js'
import { validationResult } from 'express-validator';
import userValidationSchema from '../validation/UserValidation.js';
import bcryptjs from 'bcryptjs';
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';


// create user Controller 
export const CreateUserController = async (request, response) => {
  try {
    const { error } = userValidationSchema.validate(request.body);
    if (error) {
      return validationError(response, error.details.map(detail => detail.message), "validation error")
    }
    request.body.password = await bcryptjs.hash(request.body.password, await bcryptjs.genSalt(10));

    console.log("role before saving", request.body.role);
    let theUser = await UserService.CreateUserService(request.body);
    return createResponse(response, theUser, "User inserted successfully")
  }
  catch (err) {
    return errorResponse(response, err.message, "insert failed")
  }

}

//get all user Controller
export const GetAllUserController = async (request, response) => {
  try {
    let theUser = await UserService.GetAllUserService();
    return successResponse(response, theUser, "All user fetch")
  }
  catch (err) {
    return errorResponse(response, err.messaage)
  }
}

//get user by Id  Controller
export const GetOneUserController = async (request, response) => {
  try {

    const userIdFromToken = request.user.id;
    const userIdFromParams = request.params.userid;

    if (userIdFromToken !== userIdFromParams) {
      return errorResponse(response, "Unauthorized user");
    }

    let user = await UserService.GetByIdService(userIdFromParams);
    if (!user) {
      return notFoundResponse(response, "User not found");
    }
    return successResponse(response, user, "User fetched successfully");
  } catch (err) {
    return errorResponse(response, err.message);
  }
};


//update product Controller
export const UpdateUserController = async (request, response) => {
  try {
    const userIdFromToken = request.user.id;
    const userIdFromParams = request.params.userid;

    if (userIdFromToken !== userIdFromParams) {
      return errorResponse(response, "Unauthorized, you can only update your own data");
    }

    let theUser = await UserService.UpdateUserService(userIdFromParams, request.body);

    if (!theUser) {
      return notFoundResponse(response, "User not found");
    }
    return successResponse(response, theUser, "User updated successfully");
  } 
  catch (err) {
    return errorResponse(response, err.message);
  }
};

//delete product Controller
export const DeleteUserController = async (request, response) => {
  try {

    let theUser = await UserService.DeleteUserService(request.params.userid);
    if (!theUser) {
      return notFoundResponse(response, "user not found")
    }
    return successResponse(response, theUser, "Delete Successfully")
  }
  catch (err) {
    return errorResponse(response, err.message)
  }
}

//login user Controller
export const loginUser = async (request, response) => {

  // validation check
  const error = validationResult(request);
  if (!error.isEmpty()) {
    return validationError(response, error.array(), "validation error")
  }
  try {
  
    let { email, password } = request.body;
    console.log("login");
    await UserService.LoginUserService(email, password, response);
  }
  catch (err) {
    return errorResponse(response, err.message)
  }
}
