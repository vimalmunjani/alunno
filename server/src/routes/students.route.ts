import { Router } from 'express';

import { StudentsController } from '../controllers';
import { AuthValidator } from '../middlewares';

const router: Router = Router();

router.get('/', AuthValidator.validateAuthToken, StudentsController.getAllStudents)
    .get('/:id', AuthValidator.validateAuthToken, StudentsController.getStudentById)
    .post('/', AuthValidator.validateAuthToken, StudentsController.createStudent)
    .patch('/', AuthValidator.validateAuthToken, StudentsController.updateStudent)
    .delete('/:id', AuthValidator.validateAuthToken, StudentsController.deleteStudent);

export { router as studentsRouter };
