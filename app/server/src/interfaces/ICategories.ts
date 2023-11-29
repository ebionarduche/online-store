export interface ICategories {
  id: number,
  category: string
}


export default interface ICategoriesModel {
  findAll(): Promise<ICategories[]>;
}
