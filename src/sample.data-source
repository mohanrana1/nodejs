import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employ } from "./entity/employ"
import { student } from "./entity/student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "username",
    password: "password",
    database: "database_name",
    synchronize: true,
    logging: false,
    entities: [User, employ, student],
    migrations: [],
    subscribers: [],
})
