import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

import { IUser } from '../models/user';

export const hashPassword = async (password: string): Promise<string> => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (error) {
        throw new Error("Error hashing password");
    }
}

export const matchPassword = async (password: string, passwordHash: string): Promise<boolean> => {
    try {
        const isMatch = await bcrypt.compare(password, passwordHash);
        if (!isMatch) {
            throw new Error("Passwords do not match");
        }
        return isMatch;
    } catch (error) {
        throw new Error("Error matching password");
    }
}

export const signJWTToken = async (payload: Partial<IUser>): Promise<string> => {
    return new Promise((resolve, reject) => {
        JWT.sign(payload, 'someJWTSecret', {
            expiresIn: '1d'
        }, (error: any, token: any) => {
            if (error) {
                reject(`Error signing JWT Token`);
            }
            resolve(token);
        });
    });
}

export const verifyJWTToken = async (token: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        JWT.verify(token, 'someJWTSecret', {
        }, (error, payload) => {
            if (error) {
                reject(error);
            }
            resolve(payload);
        });
    });
}