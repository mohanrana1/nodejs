import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity() //define as table
export class UserProfile {

    @PrimaryGeneratedColumn('uuid') //gives unique id
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({nullable: true})
    password: string

    @DeleteDateColumn()
    deleteDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
















// import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Entity()

// export class UserProfile {
//     @PrimaryGeneratedColumn('uuid')
//     id: string

//     @Column()
//     username: string
    
//     @Column()
//     password: string

//     @DeleteDateColumn()
//     deleteDate: Date

//     @CreateDateColumn()
//     createdAt: Date

//     @UpdateDateColumn()
//     updatedAt: Date
// }
