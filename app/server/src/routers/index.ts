import { Router } from 'express';
import productsRouter from './productsRoutes';

const router = Router();

router.use('/', productsRouter);

export default router;
