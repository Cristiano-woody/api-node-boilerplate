import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import GetUserByIDUseCase from './GetUserByIDUseCase'

export const makeGetUserByIDUseCase = (): GetUserByIDUseCase => {
  const userRepository = new PgUserRepository()
  const getUserByIDUseCase = new GetUserByIDUseCase(userRepository)
  return getUserByIDUseCase
}
