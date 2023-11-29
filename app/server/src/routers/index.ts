import { Router } from 'express';
import productsRouter from './productsRoutes';
import categoriesRouter from './categoriesRoutes'
import ratingRouter from './ratingRoutes';

const router = Router();

router.use('/', productsRouter);
router.use('/', categoriesRouter);
router.use('/', ratingRouter);

export default router;
