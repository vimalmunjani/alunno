export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
}

export interface IContact {
    mobileNo?: string;
    address?: string;
}

export interface IStudent {
    id: any;
    email: string;
    firstName: string;
    lastName: string;
    gender?: Gender;
    DOB: Date;
    contact: IContact;
    graduationYear: number;
    course: string;
    grade: string;
}
