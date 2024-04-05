import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import { AppError } from "./AppError";

interface RequestCustom extends Request{
    user: any
}
const Auth = async (req: RequestCustom, res: Response, next:NextFunction) => {
    try {
        console.log(req.headers.authorization)
        let token : any
        token = req.headers.authorization.split('Bearer ')[1]
        const decodedToken = await jwt.verify(token, 'secretKey')
        const user = await decodedToken
        console.log(user)
        req.user = user
        next()
        console.log(token)
    } catch (error) {
        next(new AppError(400, "Invalid Request"))
    }
}

export default Auth