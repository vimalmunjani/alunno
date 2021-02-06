import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { AuthService, UserService } from "../services";

/**
 * SIGN IN
 */
export const signin = async (request: Request, response: Response) => {

    const { email, password } = request.body;

    try {
        const user = await UserService.findUser(email);
        if (!user) {
            throw new Error(`User not found`);
        }
        await AuthService.matchPassword(password, user.password);
        const authToken = await AuthService.signJWTToken({ email: user.email });
        return response.status(200).json({ authToken });
    } catch (error) {
        return response.status(401).json({ message: `Invalid Email/password` });
    }
}

/**
 * SIGN UP
 */
export const signup = async (request: Request, response: Response) => {

    const { email, password } = request.body;

    // Validate request
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
    }

    const ifUserExists: boolean = await UserService.ifUserExists(email);
    if (ifUserExists) {
        return response.status(409).json({ message: `Email already in use` });
    }

    try {
        const passwordHash = await AuthService.hashPassword(password);
        const user = await UserService.createUser(email, passwordHash);
        return response.status(201).json(user);
    } catch (error) {
        return response.status(500).json({ message: `Something went wrong` });
    }

}

/**
 * Check Token validity
 */
export const checkToken = async (request: Request, response: Response) => {
    const { email } = request.body.user;
    try {
        const user = await UserService.findUser(email);
        if (!user) {
            throw new Error(`User not found`);
        }
        return response.status(200).json({ isTokenValid: true });
    } catch (error) {
        return response.status(401).json({ isTokenValid: false });
    }
}