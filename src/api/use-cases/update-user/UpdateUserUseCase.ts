import type User from '../../entities/User'
import UserNotFoundError from '../../errors/UserNotFoundError'
import { type ICrypto } from '../../helpers/crypto/ICrypto'
import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IUpdateUserUseCase } from './IUpdateUserUseCase'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'

class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor (private readonly userRepository: IUserRepository, private readonly crypto: ICrypto) {}
  async execute (data: UpdateUserUseCaseDTO, userID: string): Promise<User | null> {
    const user = await this.userRepository.getUserByID(userID)
    if (user === null || user === undefined) {
      throw new UserNotFoundError()
    }
    if (data.email !== undefined && data.email !== null) {
      user.email = data.email
    }
    if (data.name !== undefined && data.name !== null) {
      user.name = data.name
    }
    if (data.password !== undefined && data.password !== null) {
      user.password_hash = await this.crypto.hash(data.password)
    }
    await this.userRepository.updateUser(user)
    return user
  }
}

export default UpdateUserUseCase
