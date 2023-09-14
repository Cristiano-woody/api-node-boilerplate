import { ICreateUserRepository } from '@/api/repositories/create-user/ICreateUserRepository'
import { CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'
import { ICreateUserUseCase } from './ICreateUserUseCase'
import User from '@/api/models/User'

class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly createUserRepository: ICreateUserRepository){}
  
  async execute(data: CreateUserUseCaseDTO): Promise<CreateUserUseCaseDTO> {
    const newUser = new User({name: data.name, email: data.email, passwordHash: data.password })
    console.log(await this.createUserRepository.CreateUser(newUser))
    return data
  }
}

export default CreateUserUseCase
