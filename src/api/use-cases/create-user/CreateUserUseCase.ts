import { type CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'
import { type ICreateUserUseCase } from './ICreateUserUseCase'
import User from '../../entities/User'
import { type ICrypto } from '../../helpers/crypto/ICrypto'
import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'

class CreateUserUseCase implements ICreateUserUseCase {
  constructor (private readonly createUserRepository: IUserRepository, private readonly crypto: ICrypto) {}

  async execute (data: CreateUserUseCaseDTO): Promise<Omit<User, 'passwordHash'>> {
    const newUser = new User({ name: data.name, email: data.email, passwordHash: await this.crypto.hash(data.password) })
    const user = await this.createUserRepository.createUser(newUser)
    const userWithoutPassword: Omit<User, 'passwordHash'> = {
      name: user.name,
      email: user.email,
      id: user.id
    }
    return userWithoutPassword
  }
}

export default CreateUserUseCase
