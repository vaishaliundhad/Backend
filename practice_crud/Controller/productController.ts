
import productTable from "../db/ProductSchema";
import { Iproduct } from "../models/IProduct";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const createProduct = async (request: Request, response: Response) => {
    let { username, email, password,imageUrl, isActive } = request.body;
    try {
        const theproduct: Iproduct | null | undefined = await new productTable({
            username: username,
            email: email,
            password: password,
            imageUrl:imageUrl,
            isActive: isActive
        }).save()
        if (theproduct) {
            return response.status(200).json({
                data: theproduct,
                msg: "create product"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "something went wrong"
        })
    }

}


export const getAllproduct = async (request: Request, response: Response) => {
    try {
        let theproduct = await productTable.find()
        if (theproduct) {
            return response.status(200).json({
                data: theproduct,
                msg: "get all data"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "semonthing went wrong"
        })
    }
}


export const getOneUser = async (request: Request, response: Response) => {
    try {

        let { userid } = request.params;
        const mongouserid = new mongoose.Types.ObjectId(userid)
        let theuser: Iproduct | null | undefined = await productTable.findById(mongouserid)
        if (theuser) {
            return response.status(200).json({
                data: theuser,
                msg: "successfully getbyid"
            })
        }
    }

    catch (err) {
        return response.status(500).json({
            data: null,
            msg:"something went wrong"
        })
    }
}