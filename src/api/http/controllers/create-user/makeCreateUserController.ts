import { makeCreateUserUseCase } from '../../../use-cases/create-user/makeCreateUserUseCase'
import CreateUserController from './CreateUserController'

export const makeCreateUserController = (): CreateUserController => {
  const createUserUseCase = makeCreateUserUseCase()
  const createUserUseCaseController = new CreateUserController(
    createUserUseCase
  )
  return createUserUseCaseController
}
