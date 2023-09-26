import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import DeleteUserByIDUseCase from './DeleteUserByIDUseCase'
import { type IDeleteUserByIDUseCase } from './IDeleteUserByIDUseCase'

export const makeDeleteUserUseCase = (): IDeleteUserByIDUseCase => {
  const userRepository = new PgUserRepository()
  const deleteUserByIDUseCase = new DeleteUserByIDUseCase(userRepository)
  return deleteUserByIDUseCase
}
