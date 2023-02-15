import { Router } from 'express';
import FotoController from '../controllers/FotoController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', loginRequired, FotoController.store);

export default router;
