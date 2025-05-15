import { Request, Response } from "express";
import { Iuser } from "../models/IUser";
import userTable from "../db/userSchema";
import bcryptjs from 'bcryptjs';
import gravatar from 'gravatar'
import { validationResult } from "express-validator";






// export const postUser = async (request: Request, response: Response) => {
//     let { username, email, password, imageUrl, isActive } = request.body;
//     let theuser: Iuser | undefined | null = await new userTable({
//         username: username,
//         email: email,
//         password: password,
//         imageUrl: imageUrl,
//         isActive: isActive
//     }).save()
//     if (theuser) {
//         return response.status(200).json({
//             msg: "user inserted",
//             data: theuser
//         })
//     }
// }


export const register = async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors.array()
        })
    }
    try {
        let { username, email, password } = request.body;

        const userObj = await userTable.findOne({ email: email })
        if (userObj) {
            return response.status(400).json({
                error: "The user is already exit"
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        const imageUrl = gravatar.url(email, {
            size: "200",
            rating: "pg",
            default: "mm"
        })

        const newUser: Iuser = {
            username: username,
            email: email,
            password: hashPassword,
            imageUrl: imageUrl,
            isAdmin: false
        }

        const theuserobj = await new userTable(newUser).save();
        if (theuserobj) {
            return response.status(200).json({
                data: theuserobj,
                msg: "Registation is success"
            })
        }
    }
    catch (error: any) {
        return response.status(500).json({
            error: error.message
        })

    }
}


export const login = async (request: Request, response: Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors.array()
        })
    }
    try {
        let { email, password } = request.body;
        console.log("email", email);

        const userObj = await userTable.findOne({ email: email })
        if (!userObj) {
            return response.status(400).json({
                error: "user dont exit"
            })
        }


        const isMatch = await bcryptjs.compare(password, userObj.password);
        if (!isMatch) {
            return response.status(401).json({
                error: "invalid password"
            })
        }

        if (secretkey && payload) {
            Jwt.sign(payload , secretkey, {
                expiresIn: 100000000000
            }, (error, encoded) => {
                if (error) throw error;
                if (encoded) {
                    return response.status(200).json({
                        data: userObj,
                        token: encoded,
                        msg: "login successfully"
                    })
                }
            }
            )
        }


    }
    catch (error: any) {
        return response.status(500).json({
            error: error.message
        })
    }
}

export const getAlluser = async (request: Request, response: Response) => {
    try {
        const theuser = await userTable.find();
        if (theuser) {
            return response.status(200).json({
                data: theuser
            })
        }
    }
    catch (error) {
        return response.status(500).json({

            msg: "not found any user"
        })
    }
}

export const getOneUser = async (request: Request, response: Response) => {
    try {
        let { userid } = request.params;
        const mongouserid = new mongoose.Types.ObjectId(userid);
        let theuser: Iuser | undefined | null = await userTable.findById(mongouserid);
        if (theuser) {
            return response.status(200).json(theuser)
        }
    }
    catch (err) {
        return response.status(500).json({
            msg: "not found userid"
        })
    }
}


export const updateUser = async (request: Request, response: Response) => {
    let { userid } = request.params;
    let { username, email, password, imageUrl, isActive } = request.body;
    try {
        const mongouserid = new mongoose.Types.ObjectId(userid)
        let updateuser = await userTable.findByIdAndUpdate(mongouserid, {
            username: username,
            email: email,
            password: password,
            imageurl: imageUrl,
            isActive: isActive
        })

        if (updateuser) {
            return response.status(200).json({
                data: updateuser,
                msg: "update successfull"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "something went wrong"
        })
    }
}


export const deleteUser = async (request: Request, response: Response) => {
    let { userid } = request.params;
    try {
        const mongouserid = new mongoose.Types.ObjectId(userid)
        let deleteId = await userTable.findByIdAndDelete(mongouserid)
        if (deleteId) {
            return response.status(200).json({
                data: deleteId,
                msg: "delete successfully"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "something went wrong"
        })
    }
}