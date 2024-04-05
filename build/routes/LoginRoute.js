"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var LoginController_1 = require("../controller/LoginController");
var router = express.Router();
router.route('/register').post(LoginController_1.postDataRegister);
router.route('/login').post(LoginController_1.postDataLogin);
exports.default = router;
//# sourceMappingURL=LoginRoute.js.map