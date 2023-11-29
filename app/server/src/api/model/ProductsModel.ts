import Products from '../../database/model/Products';
import IProductsModel, { IProducts } from '../../interfaces/IProducts';
import { Sequelize } from 'sequelize';

export default class ProductModel implements IProductsModel {
  private model = Products;

  async findAll(): Promise<IProducts[]> {
    const data = await this.model.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'categoriesId',
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

  async findById(id: number): Promise<IProducts | null> {
    const data = await this.model.findByPk(id);
    if (data == null) return null;
    return data;
  }
}
