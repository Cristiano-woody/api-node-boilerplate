import type User from '../../models/User'
import { type IGetUserRepository } from '../../repositories/get-user/IGetUserRepository'
import { type IGetAllUsersUseCase } from './IGetAllUsersUseCase'

class GetAllUsersUseCase implements IGetAllUsersUseCase {
  constructor (private readonly getUserRepository: IGetUserRepository) {}
  execute (): Promise<User[]> {
    
  }
}

export default GetAllUsersUseCase
