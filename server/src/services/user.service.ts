import { DeleteResult, getRepository } from "typeorm";

import { IUser } from "../models";
import { User } from "../entity";

/**
 * Create new user
 */
export const createUser = async (email: string, password: string): Promise<IUser> => {
    try {
        const userRepository = getRepository(User);
        const newUser = userRepository.create({ email, password, isAdmin: false });
        await userRepository.save(newUser);
        return newUser;
    } catch (error) {
        throw new Error(`Error creating user`);
    }
};

/**
 * Check if email already in use
 */
export const ifUserExists = async (email: string): Promise<boolean> => {
    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ email });
        if (!user) {
            return false;
        }
        return true;
    } catch (error) {
        throw new Error(`Error checking user existence`);
    }
};

/**
 * Find User
 */
export const findUser = async (email: string): Promise<IUser | undefined> => {
    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ email });
        return user;
    } catch (error) {
        throw new Error(`Error finding user`);
    }
};

/**
 * Update User
 */
export const updateUser = async (user: IUser): Promise<IUser | null> => {
    try {
        const userRepository = getRepository(User);
        const studentToUpdate = await userRepository.findOne(user.id);
        const { id, ...newUser } = user;
        const updatedUser = await userRepository.save({ ...studentToUpdate, ...newUser });
        return updatedUser;

    } catch (error) {
        throw new Error("Error updating user");
    }
};

/**
 * Delete User
 */
export const deleteUser = async (id: any): Promise<IUser | DeleteResult> => {
    try {
        const userRepository = getRepository(User);
        const deletedStudent = await userRepository.delete(id);
        return deletedStudent;
    } catch (error) {
        throw new Error(`Error deleting student`);
    }
};
