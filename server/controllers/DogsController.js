import { dogsService } from "../services/DogsService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";





export class DogsController extends BaseController {
  constructor() {
    super('api/dogs')
    this.router
      .get('', this.getDogs)
      .post('', this.createDog)
      .delete('/:name', this.deleteDog)
  }

  async getDogs(req, res, next) {
    try {
      let dogs = await dogsService.getDogs()
      return res.send(dogs)
    } catch (error) {
      next(error)
    }
  }

  async createDog(req, res, next) {
    try {
      let dog = await dogsService.createDog(req.body)
      return res.send(dog)
    } catch (error) {
      next(error)
    }
  }

  async deleteDog(req, res, next) {
    try {
      logger.log(req.params.name)
      let message = await dogsService.deleteDog(req.params.name)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}