import { IUser } from "../models/user";

import Users from '../data/users.json';

/**
 * Create new user
 */
export const createUser = async (email: string, password: string): Promise<IUser> => {
    try {
        const user: IUser = {
            id: Users.length + 1,
            email,
            password,
            isAdmin: false
        }
        Users.push(user);
        return user;
    } catch (error) {
        throw new Error(`Error creating user`);
    }
};

/**
 * Check if email already in use
 */
export const ifUserExists = async (email: string): Promise<boolean> => {
    try {
        const user = Users.find((user) => user.email === email);
        if (user) {
            return true
        }
        return false
    } catch (error) {
        throw new Error(`Error checking user existence`);
    }
};

/**
 * Find User
 */
export const findUser = async (email: string): Promise<IUser | null> => {
    try {
        const user = Users.find((user) => user.email === email);
        if (user) {
            return user
        }
        return null;
    } catch (error) {
        throw new Error(`Error finding user`);
    }
};

/**
 * Update User
 */
export const updateUser = async (user: IUser): Promise<IUser | null> => {
    try {
        const userIndex = Users.findIndex((_user) => _user.email === user.email);
        if (userIndex !== -1) {
            Users[userIndex] = {
                ...Users[userIndex],
                ...user
            }
        }
        return null;
    } catch (error) {
        throw new Error("Error updating user");
    }
};
