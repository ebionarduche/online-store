import { Request, Response, Router } from 'express';
import CategoriesController from '../api/controllers/CategoriesController';

const categoriesController = new CategoriesController();
const router = Router();

router.get('/categories', (req: Request, res: Response) => categoriesController.getAll(req, res));

export default router;
