import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();
const appC = AppController;
const stuC = StudentsController;

router.get('/', (req, res) => appC.getHomepage(req, res));

router.get('/students', (req, res) => stuC.getAllStudents(req, res));
router.get('/students/:major', (req, res) => stuC.getAllStudentsByMajor(req, res));

export default router;
