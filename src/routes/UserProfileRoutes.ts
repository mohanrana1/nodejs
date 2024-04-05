import * as express from 'express';
import {deleteData, getSingleData, getdata, postData, updateData} from '../controller/UserProfileController'

const router = express.Router();

    // #swagger.tags = ["student"]
    // @Api(tags='student')

router.route('/userprofile/').get(getdata).post(postData); 
// router.route('/student/').get(getdata).post(upload.fields([
//     {
//         name:"profile"
//     },
//     {
//         name: "coverImage"
//     }   

// ]),postData); 

router.route('/userprofile/:id').get(getSingleData).delete(deleteData).patch(updateData)



export default router;