import { Router } from 'express';
import productsRouter from './productsRoutes';
import ratingRouter from './ratingRoutes';

const router = Router();

router.use('/', productsRouter);
router.use('/', ratingRouter);

export default router;
