import { CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'

export interface ICreateUserUseCase {
  execute: (data: CreateUserUseCaseDTO) => Promise<CreateUserUseCaseDTO>
}
