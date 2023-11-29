import { Request, Response } from 'express';
import CategoriesService from '../services/CategoriesService';
import mapStatusHTTP from '../../utils/mapStatusHTTP';

export default class CategoriesController {
  constructor(private categoriesService = new CategoriesService()) {}

  public async getAll(_req: Request, res: Response) {
    const serviceResponse = await this.categoriesService.getAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
