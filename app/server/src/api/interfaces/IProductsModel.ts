import { IProducts } from '../../database/interfaces/IProducts';

export default interface IProductsModel {
  findAll(): Promise<IProducts[]>;
}
