import { type IGetAllUsersUseCase } from '../../../use-cases/get-all-users/IGetAllUsersUseCase'
import { type IGetAllUsersController } from './IGetAllUsersController'
import { type Request, type Response } from 'express'

class GetAllUsersController implements IGetAllUsersController {
  constructor (private readonly getAllUserUseCase: IGetAllUsersUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getAllUserUseCase.execute()
      return res.status(200).send(users)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

export default GetAllUsersController
