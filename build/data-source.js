"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var employ_1 = require("./entity/employ");
var student_1 = require("./entity/student");
var Teacher_1 = require("./entity/Teacher");
var UserProfile_1 = require("./entity/UserProfile");
var Login_1 = require("./entity/Login");
// type: "mysql",
// host: "localhost",
// port: 3306,
// username: "root",
// password: "Ihba62813",
// database: "newdb",
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: "postgres://default:OcQg86XBeIhW@ep-bitter-hat-a47pcfew-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    // url:"postgres://default:OcQg86XBeIhW@ep-bitter-hat-a47pcfew-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    synchronize: false,
    logging: false,
    entities: [User_1.User, employ_1.employ, student_1.student, Teacher_1.Teacher, UserProfile_1.UserProfile, Login_1.Login],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map