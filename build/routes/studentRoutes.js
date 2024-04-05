"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var studentController_1 = require("../controller/studentController");
// import { upload } from '../utils/UploadFiles';
var ValidateRoute_1 = require("../utils/ValidateRoute");
var router = express.Router();
// #swagger.tags = ["student"]
// @Api(tags='student')
router.route('/student/').get(ValidateRoute_1.default, studentController_1.getdata).post(studentController_1.postData);
// router.route('/student/').get(getdata).post(upload.fields([
//     {
//         name:"profile"
//     },
//     {
//         name: "coverImage"
//     }   
// ]),postData); 
router.route('/student/:id').get(studentController_1.getSingleData).delete(studentController_1.deleteData).patch(studentController_1.updateData);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map