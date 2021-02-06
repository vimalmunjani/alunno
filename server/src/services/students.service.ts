import { DeleteResult, getRepository, getMongoRepository } from "typeorm";

import { IStudent } from "../models";
import { Student } from "../entity";

/**
 * Create Student
 */
export const createStudent = async (student: IStudent): Promise<IStudent> => {
    try {
        const studentRepository = getRepository(Student);
        const newStudent = studentRepository.create(student);
        await studentRepository.save(newStudent);
        return newStudent;
    } catch (error) {
        throw new Error(`Error creating student`);
    }
};

/**
 * Get All Students
 */
export const getAllStudents = async (): Promise<Array<IStudent>> => {
    try {
        const studentRepository = getRepository(Student);
        const students = await studentRepository.find();
        return students;
    } catch (error) {
        throw new Error(`Error getting students`);
    }
};

/**
 * Get Student by Id
 */
export const getStudentById = async (id: any): Promise<IStudent | undefined> => {
    try {
        const studentRepository = getRepository(Student);
        const student = await studentRepository.findOne(id);
        return student;
    } catch (error) {
        throw new Error(`Error finding student`);
    }
};

/**
 * Update Student
 */
export const updateStudent = async (student: IStudent): Promise<IStudent | undefined> => {
    try {
        const studentRepository = getRepository(Student);
        const studentToUpdate = await studentRepository.findOne(student.id);
        const { id, ...newStudent } = student;
        const updatedStudent = await studentRepository.save({ ...studentToUpdate, ...newStudent });
        return updatedStudent;
    } catch (error) {
        throw new Error(`Error updating student`);
    }
};

/**
 * Delete Student
 */
export const deleteStudent = async (id: any): Promise<IStudent | DeleteResult> => {
    try {
        const studentRepository = getRepository(Student);
        const deletedStudent = await studentRepository.delete(id);
        return deletedStudent;
    } catch (error) {
        throw new Error(`Error deleting student`);
    }
};
