import Products from '../../database/model/Products';
import Categories from '../../database/model/Categories';
import IProductsModel from '../interfaces/IProductsModel';
import { IProducts } from '../../database/interfaces/IProducts';
import { Sequelize } from 'sequelize';

export default class ProductModel implements IProductsModel {
  private model = Products;

  async findAll(): Promise<IProducts[]> {
    const data = await this.model.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'categoriesId', // Mantenha a chave estrangeira
        'stock',
        'brand',
        'salesFormat',
        'colors',
        'price',
        'quantity',
        [
          Sequelize.literal(
            '(SELECT category FROM categories WHERE categories.id = products.categories_id)',
          ),
          'category',
        ],
      ],
    });

    return data;
  }
}
