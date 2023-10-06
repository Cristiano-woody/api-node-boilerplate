import type User from '../../entities/User'
import { type IUpdateUserUseCase } from './IUpdateUserUseCase'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'

class UpdateUserUseCase implements IUpdateUserUseCase {
  async execute (data: UpdateUserUseCaseDTO): Promise<User> {

  }
}

export default UpdateUserUseCase
