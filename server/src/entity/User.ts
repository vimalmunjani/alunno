
import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { IUser } from "../models/user";

@Entity()
export class User implements IUser {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'boolean',
        default: false
    })
    isAdmin: boolean;

}