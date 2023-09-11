import CreateUserUseCase from './CreateUserUseCase'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserUseCase = new CreateUserUseCase()
  return createUserUseCase
}
