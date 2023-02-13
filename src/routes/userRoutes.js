import { Router } from 'express';
import loginRequired from '../middleware/loginRequired';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
