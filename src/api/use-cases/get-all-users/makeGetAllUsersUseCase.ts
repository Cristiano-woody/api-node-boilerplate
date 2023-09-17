import PgGetUserRepository from '../../repositories/get-user/PgGetUserRepository'
import GetAllUsersUseCase from './GetAllUsersUseCase'

export const makeGetAllUsersUseCase = (): GetAllUsersUseCase => {
  const getUserRepository = new PgGetUserRepository()
  const getAllUsersUseCase = new GetAllUsersUseCase(getUserRepository)
  return getAllUsersUseCase
}
