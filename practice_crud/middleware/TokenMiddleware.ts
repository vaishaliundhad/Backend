import { Request , Response , NextFunction } from "express";
import Jwt from 'jsonwebtoken'

export const TokenMiddleware:any = async(request:Request , response:Response , next:NextFunction)=>{
    try
    {

        const secretkey:any = process.env.SECRET_KEY;
        const token:string | string[] |undefined= request.headers['x-auth-token']
        if(secretkey && token)
        {
            const decode:any = await Jwt.verify(token.toString() , secretkey)
            if(decode)
            {
                return request.headers['user-data']=decode.user;
                next();
            }
            else{
                return response.status(401).json({
                    msg:"unauthorized , invalid token"
                })
            }
        }
        else{
            return response.status(401).json({
                msg:"unauthorized , no token provide "
            })
        }
    }
    catch(error:any)
    {
        return response.status(500).json({
          error:error.message
        })
    }

}