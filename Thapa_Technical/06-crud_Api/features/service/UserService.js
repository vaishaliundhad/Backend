import UserTable from "../Model/UserSchema.js";
import { successResponse, createResponse, validationError, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//create  user service
export const CreateUserService = async (model) => {
  const result = await UserTable.create(model)
  return result
}

//get all user service
export const GetAllUserService = async () => {
  return await UserTable.find();
}

//get user by Id service
export const GetByIdService = async (userid) => {
  let mongoUserId = new mongoose.Types.ObjectId(userid);
  return await UserTable.findById(mongoUserId)
}

//update user service service
export const UpdateUserService = async (userid, data) => {
  let mongoUserId = new mongoose.Types.ObjectId(userid);
  return await UserTable.findByIdAndUpdate(mongoUserId, data, { new: true })
}

//deleted user service service
export const DeleteUserService = async (userid) => {
  let mongoUserId = new mongoose.Types.ObjectId(userid);
  return await UserTable.findByIdAndDelete(mongoUserId)
}

//find user by Email service
export const FindUserByEmail = async (email) => {
  return await UserTable.findOne({ email });
}

// login user service
export const LoginUserService = async (email, password, response) => {
  //Check the email is user in the DB or not. If not, it says "The User does not exist".
  const userObj = await FindUserByEmail(email);
  if (!userObj) {
    return notFoundResponse(response ,"The User does not exit")
  }
  console.log(userObj ," userObj");
  
  //compare password
  const isMatch = await bcryptjs.compare(password, userObj.password);
  if (!isMatch) {
    return notFoundResponse(response ,"invalid password")
  }
  //Generate JWT token
  const payload = {
    user: {
      id: userObj._id,
      email: userObj.email,
      role: userObj.role
    }
  };

  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    return response.errorResponse(response , error.message , "JWT secret key not configured")
  }
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '5h'
  })
  console.log("Generated Token:", token)
  return successResponse(response , "login successful",{
    token: token,
    data: {
      id: userObj._id,
      userName: userObj.userName,
      email: userObj.email,
      isAdmin: userObj.isAdmin,
      role: userObj.role
    }
  })
}