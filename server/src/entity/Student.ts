import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { Gender, IContact, IStudent } from "../models";

@Entity()
export class Student implements IStudent {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        enum: Gender
    })
    gender: Gender;

    @Column({
        type: 'date'
    })
    DOB: Date;

    @Column()
    contact: IContact

    @Column()
    graduationYear: number

    @Column()
    course: string

    @Column()
    grade: string

}