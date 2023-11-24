import Products from '../../database/model/Products';
import IProductsModel from '../interfaces/IProductsModel';
import { IProducts } from '../../database/interfaces/IProducts';

export default class ProductModel implements IProductsModel {
  private model = Products;

  async findAll(): Promise<IProducts[]> {
    const data = await this.model.findAll();
    return data;
  }
}
