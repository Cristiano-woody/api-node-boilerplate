import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IDeleteUserByIDUseCase } from './IDeleteUserByIDUseCase'
import type User from '../../entities/User'
import UserNotFoundError from '../../errors/UserNotFoundError'

class DeleteUserByIDUseCase implements IDeleteUserByIDUseCase {
  constructor (private readonly userRepository: IUserRepository) {}
  async execute (userID: string): Promise<Omit<User, 'password_hash'>> {
    const user = await this.userRepository.getUserByID(userID)
    if (user === undefined || user === null) {
      throw new UserNotFoundError()
    }
    await this.userRepository.deleteUserByID(userID)
    const userReturn: Omit<User, 'password_hash'> = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    return userReturn
  }
}

export default DeleteUserByIDUseCase
