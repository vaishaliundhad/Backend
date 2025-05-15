import Jwt from 'jsonwebtoken'
import { notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';

export const TokenMiddleware = (request, response, next) => {

  const authHeader = request.headers.authorization || request.headers['x-auth-token'];

  if (!authHeader) {
    return notFoundResponse(response, "No token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("decode", decoded);
    if (!decoded) {
      return notFoundResponse(response, "no user data in token")
    }
    request.user = decoded.user;

    console.log("User ID from token1:", decoded.user.id);
    console.log("User ID from request.user:", request.user.id);

    next();
  } catch (error) {
    return errorResponse(response, "Invalid token");
  }
};

//AdminTokenMiddleware
export const AdminTokenMiddleware = (request, response, next) => {

  const authHeader = request.headers.authorization || request.headers['x-auth-token'];

  if (!authHeader) {
    return notFoundResponse(response, "No token provided");
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.user.role === "admin") {
      return notFoundResponse(response, "Invalid Role, Access Denied")
    }
    request.user = decoded.user;

    next();
  } catch (error) {
    return errorResponse(response, "Invalid token");
  }
};

//sellerTokenMiddleware

export const SellerTokenMiddleware = (request, response, next) => {

  const authHeader = request.headers.authorization || request.headers['x-auth-token'];

  if (!authHeader) {
    return notFoundResponse(response, "No token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.user.role !== "seller") {
      return notFoundResponse(response, "Invalid Role, Access Denied")
    }
    request.user = decoded.user;

    next();
  } catch (error) {
    return errorResponse(response, "Invalid token");
  }
};