"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateData = exports.deleteData = exports.getSingleData = exports.postData = exports.getdata = void 0;
var data_source_1 = require("../data-source");
var Teacher_1 = require("../entity/Teacher");
var AppError_1 = require("../utils/AppError");
var TeacherRepo = data_source_1.AppDataSource.getRepository(Teacher_1.Teacher);
var getdata = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, TeacherRepo.find().then(function (result) {
                        res.status(200).json({
                            message: " Teacher data has been fetched successfully",
                            data: result
                        });
                    }).catch(function (error) {
                        next(new AppError_1.AppError(400, error.message));
                        // res.status(400 ).json({
                        //     message: "Something went wrong while fetching data",
                        //     error: error.message
                        // })
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(new AppError_1.AppError(400, error_1.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getdata = getdata;
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
var postData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.body, req.file);
                req.body.profile = req.file.filename;
                return [4 /*yield*/, TeacherRepo.save(req.body).then(function (result) {
                        res.status(200).json({
                            message: " Teacher data has been posted successfully",
                            data: result
                        });
                    }).catch(function (error) {
                        next(new AppError_1.AppError(400, error.message));
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(new AppError_1.AppError(400, error_2.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postData = postData;
var getSingleData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.body);
                console.log(req.params);
                return [4 /*yield*/, TeacherRepo.findOneBy({ id: req.params.id }).then(function (result) {
                        res.status(200).json({
                            message: " Teacher data has been fetched successfully",
                            data: result
                        });
                    }).catch(function (error) {
                        next(new AppError_1.AppError(400, error.message));
                        // res.status(400 ).json({
                        //     message: "Something went wrong while fetching data",
                        //     error: error.message
                        // })
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(new AppError_1.AppError(400, error_3.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSingleData = getSingleData;
var deleteData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var Data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, TeacherRepo.findOneBy({ id: req.params.id })];
            case 1:
                Data = _a.sent();
                if (!Data) {
                    return [2 /*return*/, next(new AppError_1.AppError(400, 'data with this id not found'))];
                }
                return [4 /*yield*/, TeacherRepo.softRemove(Data).then(function (result) {
                        res.status(200).json({
                            message: " Teacher data has been deleted successfully",
                            data: result
                        });
                    }).catch(function (err) {
                        next(new AppError_1.AppError(400, err.message));
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                next(new AppError_1.AppError(400, error_4.message));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteData = deleteData;
var updateData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, TeacherRepo.findOneBy({ id: req.params.id })];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, next(new AppError_1.AppError(404, "data with this id doesnot exist "))];
                }
                Object.assign(data, req.body);
                return [4 /*yield*/, TeacherRepo.save(data).then(function (result) {
                        res.status(200).json({
                            message: "Teacher data has been updated",
                            data: result
                        });
                    }).catch(function (error) {
                        next(new AppError_1.AppError(400, error.message));
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                next(new AppError_1.AppError(400, error_5.message));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateData = updateData;
//# sourceMappingURL=TeacherControllers.js.map