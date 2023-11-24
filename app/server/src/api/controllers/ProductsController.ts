import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import mapStatusHTTP from '../../utils/mapStatusHTTP';

export default class ProductsController {
  constructor(private productService = new ProductsService()) {}

  public async getAll(_req: Request, res: Response) {
    const serviceResponse = await this.productService.getAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
