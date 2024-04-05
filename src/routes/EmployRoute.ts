import * as express from 'express'
import { deleteData, getdata, getSingleData, updateData } from '../controller/employController'
import Auth from '../utils/ValidateRoute'
import { postData } from '../controller/employController'

const router = express.Router()

router.route('/employ').get(Auth,getdata).post(postData)
router.route('/employ/:id').get(getSingleData).delete(deleteData).patch(updateData)

export default router;