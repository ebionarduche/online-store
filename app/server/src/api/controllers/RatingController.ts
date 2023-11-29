import { Request, Response } from 'express';
import RatingService from '../services/RatingService';
import mapStatusHTTP from '../../utils/mapStatusHTTP';

export default class RatingController {
  constructor(private ratingService = new RatingService()) {}

  public async getAll(_req: Request, res: Response) {
    const serviceResponse = await this.ratingService.getAll();

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
