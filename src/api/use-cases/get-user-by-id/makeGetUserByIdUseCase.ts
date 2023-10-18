import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import GetUserByIDUseCase from './GetUserByIDUseCase'

export const makeGetUserByIdUseCase = (): GetUserByIDUseCase => {
  const userRepository = new PgUserRepository()
  const getUserByIDUseCase = new GetUserByIDUseCase(userRepository)
  return getUserByIDUseCase
}
