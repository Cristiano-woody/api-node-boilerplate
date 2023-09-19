import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import GetAllUsersUseCase from './GetAllUsersUseCase'

export const makeGetAllUsersUseCase = (): GetAllUsersUseCase => {
  const UserRepository = new PgUserRepository()
  const getAllUsersUseCase = new GetAllUsersUseCase(UserRepository)
  return getAllUsersUseCase
}
