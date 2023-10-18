import { makeUpdateUserUseCase } from '../../../use-cases/update-user/makeUpdateUserUseCase'
import { type IUpdateUserController } from './IUpdateUserController'
import UpdateUserController from './UpdateUserController'

export const makeUpdateUserController = (): IUpdateUserController => {
  const updateUserUseCase = makeUpdateUserUseCase()
  const updateUserController = new UpdateUserController(updateUserUseCase)
  return updateUserController
}
