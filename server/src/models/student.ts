export interface IStudent {
    id: any;
    email: string;
    firstName: string;
    lastName: string;
    gender?: 'Male' | 'Female';
    DOB: Date;
    contact: {
        mobileNo?: string;
        address?: string;
    };
    graduationYear: number;
    course: string;
    grade: string;
}