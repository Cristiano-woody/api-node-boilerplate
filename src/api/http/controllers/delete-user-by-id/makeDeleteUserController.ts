import { makeDeleteUserUseCase } from '../../../use-cases/delete-user-by-id/makeDeleteUserUseCase'
import DeleteUserByIdController from './DeleteUserByIdController'
import { type IDeleteUserByIdController } from './IDeleteUserByIdController'

export const makeDeleteUserController = (): IDeleteUserByIdController => {
  const deleteUserByIDUseCase = makeDeleteUserUseCase()
  const deleteUserController = new DeleteUserByIdController(deleteUserByIDUseCase)
  return deleteUserController
}
