import { Request , Response , NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { library } from "../entity/library";
import { AppError } from "../utils/AppError";
import { student } from "../entity/student";

const libraryRepo = AppDataSource.getRepository(library)
const StudentRepo = AppDataSource.getRepository(student)

export const getLibraryData = async(req: Request, res: Response,next: NextFunction)=>{
     // #swagger.tags  = ['Library']

    try {
            await libraryRepo.find().then( (result) => {

                res.status(200).json({
                    message: " Library data has been fetched successfully",
                    data: result
                })
        }).catch(error=>{
            next(new AppError(400, error.message))
        })

    }catch(error){
        next(new AppError(400, error.message))
    }
}


export const postData = async (req: Request ,res: Response, next: NextFunction ) => {
        // #swagger.tags  = ['Library']

    try {
        console.log(req.body)
        const student = await StudentRepo.findOneBy({id: req.body.student})
        req.body.student = student
        console.log("body", req.body)
        await libraryRepo.save(req.body).then( result => {
            res.status(200).json({
                message: " Library data has been fetched successfully",
                data: result
            })

        }).catch(error => {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}

export const getSingleData = async (req: Request ,res: Response, next: NextFunction ) => {
       // #swagger.tags  = ['Library']

    try {
        console.log(req.body)
        console.log(req.params)
        await libraryRepo.findOneBy({id:req.params.id}).then( result => {
            res.status(200).json({
                message: " Library data has been fetched successfully",
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
         // #swagger.tags  = ['Library']

    try {
        let Data = await libraryRepo.findOneBy({id:req.params.id});

        if(!Data){
            return next(new AppError(400, 'data with this id not found'))
        }

        await libraryRepo.softRemove(Data).then( result=>{
            res.status(200).json({
                message: " Library data has been deleted successfully",
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
     // #swagger.tags  = ['Library']

    try {
        
       let data = await libraryRepo.findOneBy({id:req.params.id});

       if(!data){
        next(new AppError(404, "data with this id doesnot exist "))
       }

       Object.assign(data, req.body);
       await libraryRepo.save(data).then( (result) => {
        res.status(200).json({
            message: "Library data has been updated",
            data: result
        })
        }).catch( (error)=> {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}


