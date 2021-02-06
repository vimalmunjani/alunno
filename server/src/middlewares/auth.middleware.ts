import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services';

export const signUpValidator = () => {
    return [
        check('email').isEmail().normalizeEmail(),
        check('password').isAlphanumeric().isLength({
            min: 8,
            max: 16
        }),
    ]
}

export const validateAuthToken = async (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers.authorization ? request.headers.authorization.split(' ')[1] : null;
    if (!token) {
        return response.status(401).json({ message: `Token not present` });
    }
    try {
        const user = await AuthService.verifyJWTToken(token);
        request.body = { ...request.body, user }
        next();
    } catch (error) {
        return response.status(401).json({ message: `Invalid Token` });
    }
}
