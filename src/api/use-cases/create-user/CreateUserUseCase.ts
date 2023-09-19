import { type ICreateUserRepository } from '../../repositories/create-user/ICreateUserRepository'
import { type CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'
import { type ICreateUserUseCase } from './ICreateUserUseCase'
import User from '../../entities/User'
import { type ICrypto } from '../../helpers/crypto/ICrypto'

class CreateUserUseCase implements ICreateUserUseCase {
  constructor (private readonly createUserRepository: ICreateUserRepository, private readonly crypto: ICrypto) {}

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
