import { Router } from 'express';
import { controller } from './app/controller';

const router: Router = Router();

router.get('/cpf-validation', controller.search);

router.post('/cpf-validation', controller.add);

export { router };