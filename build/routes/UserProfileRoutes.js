"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var UserProfileController_1 = require("../controller/UserProfileController");
var router = express.Router();
// #swagger.tags = ["student"]
// @Api(tags='student')
router.route('/userprofile/').get(UserProfileController_1.getdata).post(UserProfileController_1.postData);
// router.route('/student/').get(getdata).post(upload.fields([
//     {
//         name:"profile"
//     },
//     {
//         name: "coverImage"
//     }   
// ]),postData); 
router.route('/userprofile/:id').get(UserProfileController_1.getSingleData).delete(UserProfileController_1.deleteData).patch(UserProfileController_1.updateData);
exports.default = router;
//# sourceMappingURL=UserProfileRoutes.js.map