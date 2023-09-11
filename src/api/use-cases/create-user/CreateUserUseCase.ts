import { CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'
import { ICreateUserUseCase } from './ICreateUserUseCase'

class CreateUserUseCase implements ICreateUserUseCase {
  async execute(data: CreateUserUseCaseDTO): Promise<CreateUserUseCaseDTO> {
    const user = new CreateUserUseCaseDTO({
      name: data.name,
      email: data.email,
      password: data.password,
    })
    return user
  }
}

export default CreateUserUseCase
