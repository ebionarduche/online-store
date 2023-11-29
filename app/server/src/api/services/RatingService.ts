import { ServiceResponse } from '../../interfaces/ServiceResponse';
import { IRatingModel, IRating } from '../../interfaces/IRating';
import RatingModel from '../model/RatingModel';

export default class RatingService {
  constructor(private ratingModel: IRatingModel = new RatingModel()) {}

  public async getAll(): Promise<ServiceResponse<IRating[]>> {
    const allRating = await this.ratingModel.findAll();
    return { status: 'SUCCESS', data: allRating };
  }
}
