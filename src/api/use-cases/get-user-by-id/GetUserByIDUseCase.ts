import type User from '../../entities/User'
import UserNotFoundError from '../../errors/UserNotFoundError'
import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IGetUserByIDUseCase } from './IGetUserByIDUseCase'

class GetUserByIDUseCase implements IGetUserByIDUseCase {
  constructor (private readonly userRepository: IUserRepository) {}

  async execute (userID: string): Promise<User> {
    const user = await this.userRepository.getUserByID(userID)
    if (user === undefined || user === null) {
      throw new UserNotFoundError()
    }
    return user
  }
}

export default GetUserByIDUseCase
