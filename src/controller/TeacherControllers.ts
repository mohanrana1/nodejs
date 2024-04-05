import {Request, Response, NextFunction} from 'express';
import { AppDataSource } from '../data-source';
import { Teacher } from '../entity/Teacher';
import { AppError } from '../utils/AppError';
import { student } from '../entity/student';

const TeacherRepo = AppDataSource.getRepository(Teacher)
const studentRepo = AppDataSource.getRepository(student)

export const getdata = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['teacher']
    try {

        console.log("body", req.body)
        await TeacherRepo.find({
            relations: {
                student: true
            }
        }).then( (result) => {

            res.status(200).json({
                message: " Teacher data has been fetched successfully",
                data: result
            })
        }).catch(error => {

            next(new AppError(400, error.message))

        })
    } catch (error) {
        next(new AppError(400, error.message))

    }
}

// const doc={
//     components: {
//         schemas: {
//             some: {
//                 firstName: 'Ashish',
//                 lastName: 'Pantha',
//                 age: 29
//             }
//         }
//     }
// }


export const postData = async (req: Request ,res: Response, next: NextFunction ) => {
    // #swagger.tags = ['teacher']
    // #swagger.autoBody = false
    /* #swagger.requestBody = {
        required: true,
        content: {
            "multipart/form-data": {
                schema: {
                    $ref:"#components/schemas/teacherSchema"
                }
            }
        }
    }
    */
    try {
        console.log(req.body, req.file)
        // req.body.profile = req.file.filename
        let student = await studentRepo.findOneBy({id: req.body.student})
        req.body.student = student
        await TeacherRepo.save(req.body).then( result => {
            res.status(200).json({
                message: " Teacher data has been posted successfully",
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
    // #swagger.tags = ['teacher']
    try {
        console.log(req.body)
        console.log(req.params)
        await TeacherRepo.findOneBy({id:req.params.id}).then( result => {
            res.status(200).json({
                message: " Teacher data has been fetched successfully",
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
    }
}

export const deleteData = async (req: Request, res:Response, next: NextFunction) => {
    // #swagger.tags = ['teacher']
    try {
        let Data = await TeacherRepo.findOneBy({id:req.params.id});

        if(!Data){
            return next(new AppError(400, 'data with this id not found'))
        }

        await TeacherRepo.softRemove(Data).then( result=>{
            res.status(200).json({
                message: " Teacher data has been deleted successfully",
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
    // #swagger.tags = ['teacher']
    try {
        
       let data = await TeacherRepo.findOneBy({id:req.params.id});

       if(!data){
        return next(new AppError(404, "data with this id doesnot exist "))
       }

       Object.assign(data, req.body);
       await TeacherRepo.save(data).then( (result) => {
        res.status(200).json({
            message: "Teacher data has been updated",
            data: result
        })
        }).catch( (error)=> {
            next(new AppError(400, error.message))
        })
    } catch (error) {
        next(new AppError(400, error.message))
    }
}


