import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employ } from "./entity/employ"
import { student } from "./entity/student"
import { Teacher } from "./entity/Teacher"
import { UserProfile } from "./entity/UserProfile"
import { Login } from "./entity/Login"  
import { library } from "./entity/library"
  // type: "mysql",
    // host: "localhost",
    // port: 3306,
    // username: "root",
    // password: "1212",
    // database: "newdb",
export const AppDataSource = new DataSource({
    type:'postgres',
    url:"postgres://default:43MDIBJlCbcp@ep-restless-flower-a4t89nx8.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    synchronize: false,
    logging: false,
    entities: [User, employ, student, Teacher, UserProfile, Login, library],
    migrations: [],
    subscribers: [],
})
