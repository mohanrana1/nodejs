// import SwaggerAutogen from 'swagger-autogen'
const SwaggerAutogen = require("swagger-autogen")({
    openapi: "3.0.0"
})

const doc = {
    info: {
        title: 'api documentation',
        description: 'Description'
    },
    tags:[
        {
            name:'student',
            description:''
        },
        {
            name:'teacher',
            description: ''
        },
        {
            name:'employ',
            description: ''
        },
        {
            name:'login',
            description: ''
        },
        {
            name:'user',
            description: ''
        },
        {
            name:'userProfile',
            description: ''
        },
        
    ],
    components: {
        schemas: {
            studentSchema: {
                $firstName: "Abhi",
                $lastName: "Bhattarai",
                age: 21,
                
            },
            teacherSchema: {
                $firstName: "Ashish",
                $lastName: "Pantha",
                age: 29
            },
            EmploySchema:{
                $firstName: "Mohan",
                $lastName: "rana",
                age: 19
            },
            librarySchema:{
                $bookName: "graphics",
                $IssueDate: "2080",
            },
            loginSchema:{
                $email: "a@gmail.com",
                $password: "1234"
            }
        },
        examples: {
            studentExample: {
                value: {
                firstName: "Abhi",
                lastName: "Bhattarai",
                age: 21
                },
                summary: "Examples of students"
            },
            teacherExample: {
                value: {
                firstName: "Ashish",
                lastName: "Pantha",
                age: 29
                },
                summary: "Examples of Teachers"
            },
            userExample: {
                value:{
                    firstName: "Ashish",
                    lastName: "Pantha",
                    age: 29
                },
              
            },
            loginSchema: {
                value:{
                    email: "a@gmail.com",
                    password: "1234",
                    
                }
            }
        }
    },
    host: 'localhost:3000',
    
}

const outputFile = './swagger-output.json'
const routes = ['./routes/studentRoutes','./routes/teacherRoutes','./routes/EmployRoutes','./routes/LibraryRoutes','./routes/LoginRoutes','./routes/UserProfileRoutes','./routes/userRoutes']

SwaggerAutogen(outputFile, routes, doc)