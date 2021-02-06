import { Router } from 'express';

import { AuthController } from '../controllers';
import { AuthValidator } from '../middlewares';

const router: Router = Router();

router.post('/signin', AuthController.signin)
    .post('/signup', AuthValidator.signUpValidator(), AuthController.signup)
    .get('/check-token', AuthValidator.validateAuthToken, AuthController.checkToken)

export { router as authRouter };
