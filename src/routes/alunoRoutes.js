import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.get('/:id', loginRequired, alunoController.show);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
