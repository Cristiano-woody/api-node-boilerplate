import { makeDeleteUserUseCase } from '../../../use-cases/delete-user-by-id/makeDeleteUserUseCase'
import DeleteUserController from './DeleteUserController'
import { type IDeleteUserController } from './IDeleteUserController'

export const makeDeleteUserController = (): IDeleteUserController => {
  const deleteUserByIDUseCase = makeDeleteUserUseCase()
  const deleteUserController = new DeleteUserController(deleteUserByIDUseCase)
  return deleteUserController
}
