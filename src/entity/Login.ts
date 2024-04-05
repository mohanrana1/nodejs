import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
// @Index(['email'], {
//     unique: true,
// })
// @Unique(['email'])
export class Login {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique:true})
    email: string

    @Column()
    password: string
}