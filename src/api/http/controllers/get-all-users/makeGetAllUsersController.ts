import { makeGetAllUsersUseCase } from '../../../use-cases/get-all-users/makeGetAllUsersUseCase'
import GetAllUsersController from './GetAllUsersController'

export const makeGetAllUsersController = (): GetAllUsersController => {
  const getAllUsersUseCase = makeGetAllUsersUseCase()
  const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)
  return getAllUsersController
}
