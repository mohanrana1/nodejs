import {Request, Response, NextFunction} from 'express';
import { AppDataSource } from '../data-source';
import { UserProfile } from '../entity/UserProfile';
import { AppError } from '../utils/AppError';
import * as bcrypt from 'bcryptjs';
const UserProfileRepo = AppDataSource.getRepository(UserProfile)


export const getdata = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['userProfile']
    try {
        await UserProfileRepo.find().then( (result) => {

            res.status(200).json({
                message: " Student data has been fetched successfully",
                data: result
            })
        }).catch(error => {

            next(new AppError(400, error.message))

            // res.status(400 ).json({
            //     message: "Something went wrong while fetching data",
            //     error: error.message
            // })
        })
    } catch (error) {
        next(new AppError(400, error.message))

        // res.status(500).json({
        //     message:"Something went wrong",
        //     error: error
        // })
    }
}



const doc={
    components:{
        schemas:{
            some:{
                firstName:'kisan mahat',
                lastName:"mahahsa",
                age:23
            }
        }
    }
}

export const postData = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['student']
    // #swagger.autoBody = false
    /* #swagger.requestBody = {
           required: true,
           content: {
            "multipart/form-data": {
                schema: {
                    $ref:"#components/schemas/studentSchema"
                 },
                }
            }
           }
           
    }
    */
    try {
        console.log(req.body, req.file, req.files)

        await bcrypt.hash(req.body.password, 10, function(err, hash) {
            console.log(hash)
            req.body.password = hash
             UserProfileRepo.save(req.body).then( result => {
                res.status(200).json({
                    message: " Student data has been fetched successfully",
                    data: result
                })
    
            }).catch(error => {
                next(new AppError(400, error.message))
            })
        })
        
    } catch (error) {
        next(new AppError(400, error.message))
    }
}

export const getSingleData = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['USerProfile']
    try {
        console.log(req.body)
        console.log(req.params)
        await UserProfileRepo.findOneBy({id:req.params.id}).then( result => {
            res.status(200).json({
                message: " Student data has been fetched successfully",
                data: result
            })

        }).catch(error => {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}

export const deleteData = async (req: Request, res:Response, next: NextFunction) => {
    // #swagger.tags = ['UserProfile']
    try {
        let Data = await UserProfileRepo.findOneBy({id:req.params.id});

        if(!Data){
            return next(new AppError(400, 'data with this id not found'))
        }

        await UserProfileRepo.softRemove(Data).then( result=>{
            res.status(200).json({
                message: " Student data has been deleted successfully",
                data: result
            })
        }).catch(err=>{
        next(new AppError(400, err.message))

        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}


export const updateData = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['UserProfile']
    try {
        
       let data = await UserProfileRepo.findOneBy({id:req.params.id});

       if(!data){
        next(new AppError(404, "data with this id doesnot exist "))
       }

       Object.assign(data, req.body);
       await UserProfileRepo.save(data).then( (result) => {
        res.status(200).json({
            message: "Student data has been updated",
            data: result
        })
        }).catch( (error)=> {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}


