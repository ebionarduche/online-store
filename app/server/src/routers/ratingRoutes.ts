import { Request, Response, Router } from 'express';
import RatingController from '../api/controllers/RatingController';

const ratingController = new RatingController();
const router = Router();

router.get('/ratings', (req: Request, res: Response) => ratingController.getAll(req, res));

export default router;
