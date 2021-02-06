import { Router } from 'express';

import { authController } from '../controllers';

const router: Router = Router();

router.post('/signin', authController.signin)
    .post('/signup', authController.signup)

export { router as authRouter };
