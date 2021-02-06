import { Router } from 'express';

import { authRouter } from './auth.route';
import { studentsRouter } from './students.route';

const router = Router();

router.use('/auth', authRouter);
router.use('/students', studentsRouter);

export { router };
