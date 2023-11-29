import Categories from '../../database/model/Categories';
import ICategoriesModel, { ICategories } from '../../interfaces/ICategories';

export default class CategoriesModel implements ICategoriesModel {
  private model = Categories;

  async findAll(): Promise<ICategories[]> {
    const data = await this.model.findAll();
    return data
  }

}