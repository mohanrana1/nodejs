"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var TeacherControllers_1 = require("../controller/TeacherControllers");
// import { upload } from '../utils/UploadFiles';
var router = express.Router();
// #swagger.tags = ["teacher"]
// @Api(tags='teacher')
router.route('/teacher/').get(TeacherControllers_1.getdata).post(TeacherControllers_1.postData);
router.route('/teacher/:id').get(TeacherControllers_1.getSingleData).delete(TeacherControllers_1.deleteData).patch(TeacherControllers_1.updateData);
exports.default = router;
//# sourceMappingURL=teacherRoutes.js.map