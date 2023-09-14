import PgCreateUserRepository from '@/api/repositories/create-user/PgCreateUserRepository'
import CreateUserUseCase from './CreateUserUseCase'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserRepository = new PgCreateUserRepository()
  const createUserUseCase = new CreateUserUseCase(createUserRepository)
  return createUserUseCase
}
