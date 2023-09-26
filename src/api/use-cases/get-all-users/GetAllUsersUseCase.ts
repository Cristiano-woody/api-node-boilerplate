import type User from '../../entities/User'
import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IGetAllUsersUseCase } from './IGetAllUsersUseCase'

class GetAllUsersUseCase implements IGetAllUsersUseCase {
  constructor (private readonly getUserRepository: IUserRepository) {}
  async execute (): Promise<Omit<User[], 'password_hash'>> {
    const allUsers = await this.getUserRepository.getAllUsers()
    return allUsers
  }
}

export default GetAllUsersUseCase
