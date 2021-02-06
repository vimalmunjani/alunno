import { IStudent } from "../models/student";

import Students from '../data/students.json';

let students = (<any>Students as Array<IStudent>);

/**
 * Create Student
 */
export const createStudent = async (student: IStudent): Promise<IStudent> => {
    try {
        students.push(student);
        const _student: IStudent = students[students.length + 1];
        return _student;
    } catch (error) {
        throw new Error(`Error creating student`);
    }
};

/**
 * Get All Students
 */
export const getAllStudents = async (): Promise<Array<IStudent>> => {
    try {
        return students;
    } catch (error) {
        throw new Error(`Error getting students`);
    }
};

/**
 * Get Student by Id
 */
export const getStudentById = async (id: any): Promise<IStudent | null> => {
    try {
        const student = students.find((student) => student.id === id);
        if (!student) {
            return null;
        }
        return student;
    } catch (error) {
        throw new Error(`Error finding student`);
    }
};

/**
 * Update Student
 */
export const updateStudent = async (student: IStudent): Promise<IStudent | null> => {
    try {
        const studentIndex = students.findIndex((_student) => _student.id === student.id);
        if (studentIndex !== -1) {
            (<any>Students[studentIndex]) = {
                ...Students[studentIndex],
                ...student
            }
            return (<any>Students[studentIndex] as IStudent);
        }
        return null;
    } catch (error) {
        throw new Error(`Error updating student`);
    }
};

/**
 * Delete Student
 */
export const deleteStudent = async (id: any): Promise<boolean> => {
    try {
        students = students.filter((student) => student.id !== id)
        return true
    } catch (error) {
        throw new Error(`Error deleting student`);
    }
};
