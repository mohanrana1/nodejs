import * as express from 'express'
import { deleteData, getLibraryData, getSingleData, updateData } from '../controller/Librarycontroller'
import Auth from '../utils/ValidateRoute'
import { postData } from '../controller/Librarycontroller'

const router = express.Router()

router.route('/library').get(Auth,getLibraryData).post(postData)
router.route('/library/:id').get(getSingleData).delete(deleteData).patch(updateData)

export default router;