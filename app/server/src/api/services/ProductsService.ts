import ProductsModel from '../model/ProductsModel';
import IProductsModel, { IProducts } from '../../interfaces/IProducts';
import { ServiceResponse } from '../../interfaces/ServiceResponse';

export default class ProductsService {
  constructor(private productModel: IProductsModel = new ProductsModel()) {}

  public async getAll(): Promise<ServiceResponse<IProducts[]>> {
    const products = await this.productModel.findAll();
    return { status: 'SUCCESS', data: products };
  }

  public async getProductsById(id: number) {
    const product = await this.productModel.findById(id);
    if (!product) return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado' } };
    return { status: 'SUCCESS', data: product };
  }
}
