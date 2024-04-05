import * as express from 'express';
import {deleteData, getSingleData, getdata, postData, updateData} from '../controller/studentController'
// import { upload } from '../utils/UploadFiles';
import Auth from '../utils/ValidateRoute';

const router = express.Router();

    // #swagger.tags = ["student"]
    // @Api(tags='student')

router.route('/student/').get(Auth, getdata).post( postData); 
// router.route('/student/').get(getdata).post(upload.fields([
//     {
//         name:"profile"
//     },
//     {
//         name: "coverImage"
//     }   

// ]),postData); 

router.route('/student/:id').get(getSingleData).delete(deleteData).patch(updateData)



export default router;