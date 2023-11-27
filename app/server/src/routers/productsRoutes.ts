import { Request, Response, Router } from 'express';
import ProductsController from '../api/controllers/ProductsController';

const productsController = new ProductsController();
const router = Router();

router.get('/product', (req: Request, res: Response) => productsController.getAll(req, res));

export default router;
