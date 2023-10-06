import type User from '../../entities/User'
import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IUpdateUserUseCase } from './IUpdateUserUseCase'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'

class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor (private readonly userRepository: IUserRepository) {}
  async execute (data: UpdateUserUseCaseDTO, userID: string): Promise<User> {

  }
}

export default UpdateUserUseCase
