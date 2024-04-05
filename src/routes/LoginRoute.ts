import * as express from 'express';
import { postDataLogin, postDataRegister } from '../controller/LoginController';


const router = express.Router();

router.route('/register').post(postDataRegister)
router.route('/login').post(postDataLogin)

export default router;