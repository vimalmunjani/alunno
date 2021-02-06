import { Request, Response } from "express";

/**
 * SIGN IN
 */
export const signin = async (request: Request, response: Response) => {
    return response.status(200).send('signin works');
}

/**
 * SIGN UP
 */
export const signup = async (request: Request, response: Response) => {
    return response.status(200).send('signup works');
}
