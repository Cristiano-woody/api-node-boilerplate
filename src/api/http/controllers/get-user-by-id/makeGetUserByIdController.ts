import { makeGetUserByIdUseCase } from '../../../use-cases/get-user-by-id/makeGetUserByIdUseCase'
import GetUserByIdController from './GetUserByIdController'
import { type IGetUserByIdController } from './IGetUserByIdController'

export const makeGetUserByIdController = (): IGetUserByIdController => {
  const GetUserByIdUseCase = makeGetUserByIdUseCase()
  const getUserByIdController = new GetUserByIdController(GetUserByIdUseCase)
  return getUserByIdController
}
