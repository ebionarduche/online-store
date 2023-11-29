import { Request, Response, Router } from 'express';
import ProductsController from '../api/controllers/ProductsController';

const productsController = new ProductsController();
const router = Router();

router.get('/products', (req: Request, res: Response) => productsController.getAll(req, res));
router.get('/products/:id', (req: Request, res: Response) => productsController.getProductsById(req, res));


export default router;
