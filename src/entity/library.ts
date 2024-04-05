import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from "typeorm";
import { student } from "./student";

@Entity()
export class library{
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    bookName: string

    @Column({nullable: true})
    IssueDate: string

    @Column({nullable: true})
    ReturnDate: string

    @OneToOne(()=> student)
    @JoinColumn()
    student: student


}