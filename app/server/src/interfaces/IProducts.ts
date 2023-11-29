export interface IProducts {
  id: number;
  name: string;
  description: string;
  categoriesId: number;
  stock: number;
  brand: string;
  salesFormat: string;
  colors: string;
  price: number;
  quantity: number;
}

export default interface IProductsModel {
  findAll(): Promise<IProducts[]>;
  findById(id:number): Promise<IProducts | null>
}
