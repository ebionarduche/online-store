import CategoriesModel from '../model/CategoriesModel';
import ICategoriesModel, { ICategories } from '../../interfaces/ICategories';
import { ServiceResponse } from '../../interfaces/ServiceResponse';

export default class ProductsService {
  constructor(private categoriesModel: ICategoriesModel = new CategoriesModel()) {}

  public async getAll(): Promise<ServiceResponse<ICategories[]>> {
    const categories = await this.categoriesModel.findAll();
    return { status: 'SUCCESS', data: categories };
  }

}
