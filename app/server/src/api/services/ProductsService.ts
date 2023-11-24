import { IProducts } from '../../database/interfaces/IProducts';
import ProductsModel from '../model/ProductsModel';
import IProductsModel from '../interfaces/IProductsModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class ProductsService {
  constructor(private productModel: IProductsModel = new ProductsModel()) {}

  public async getAll(): Promise<ServiceResponse<IProducts[]>> {
    const allProducts = await this.productModel.findAll();
    return { status: 'SUCCESS', data: allProducts };
  }
}
