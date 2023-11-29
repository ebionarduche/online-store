import { IRating, IRatingModel } from '../../interfaces/IRating';
import Rating from '../../database/model/Rating';

export default class RatingModel implements IRatingModel {
  private model = Rating;

  async findAll(): Promise<IRating[]> {
    const data = await this.model.findAll();
    return data;
  }
}
