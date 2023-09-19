import type User from '../../entities/User'

export interface IGetAllUsersUseCase {
  execute: () => Promise<User[]>
}
