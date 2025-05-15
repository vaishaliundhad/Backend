import Jwt from 'jsonwebtoken'
import { unauthorizedResponse, notFoundResponse, errorResponse } from '../../libs/api-responses/responses.handler.js';

// export const TokenMiddleware = async (requestuest, response, next) => {
//   try {
//     //secret key
//     const secretKey = process.env.JWT_SECRET_KEY;

//     //token from the requestuest header
//     //  const token = requestuest.headers['x-auth-token']?.split(' ')[1];
//     const token = requestuest.headers['authorization']?.split(' ')[1] || request.headers['x-auth-token'];

//     //check if both secret key and token
//     if (secretKey && token) {
//       //decode the token using secret key
//       const decode = await Jwt.verify(token.toString(), secretKey)
//       if (decode && decode.id) {

//         // docoded user
//         //  request.headers['user-data']=decode.user;
//         request.user = {id:decode.id}

//         // next middleware
//         next();
//       }
//       else {
//         return response.status(401).json({
//           error: "Unauthorized, invalid token"
//         })
//       }
//     }
//     else {
//       return response.status(401).json({
//         error: "Unauthorized, no token provided"
//       })
//     }


//   }
//   catch (error) {
//     return response.status(500).json({
//       error: error.message
//     })
//   }
// }


export const TokenMiddleware = (request, response, next) => {

  const authHeader = request.headers.authorization || request.headers['x-auth-token'];

  if (!authHeader) {
    return notFoundResponse(response, "No token provided");
  }
  const token = authHeader;
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

