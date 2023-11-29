export interface IRating {
  id: number;
  productsId: number;
  client: string;
  title: string;
  assessment: string;
  stars: number;
  date: string;
}

export interface IRatingModel {
  findAll(): Promise<IRating[]>;
}
