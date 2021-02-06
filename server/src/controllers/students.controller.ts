import { Request, Response } from "express";

import { StudentsService } from "../services";

/**
 * Get Students
 */
export const getAllStudents = async (request: Request, response: Response) => {
    try {
        const students = await StudentsService.getAllStudents();
        return response.status(200).json(students);
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }
}

/**
 * Get Student by id
 */
export const getStudentById = async (request: Request, response: Response) => {
    try {
        const studentId = request.params.id;
        const student = await StudentsService.getStudentById(studentId);
        if (!student) {
            return response.status(404).json();
        }
        return response.status(200).json(student);
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }
}

/**
 * Create Student
 */
export const createStudent = async (request: Request, response: Response) => {
    try {
        const { student } = request.body;
        const newStudent = await StudentsService.createStudent(student);
        return response.status(201).json(newStudent);
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }
}

/**
 * Update Student
 */
export const updateStudent = async (request: Request, response: Response) => {
    try {
        const { student } = request.body;
        const updatedStudent = await StudentsService.updateStudent(student);
        return response.status(200).json(updatedStudent);
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }
}

/**
 * Delete Student
 */
export const deleteStudent = async (request: Request, response: Response) => {
    try {
        const studentId = request.params.id;
        await StudentsService.deleteStudent(studentId);
        return response.status(200).json();
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }
}
