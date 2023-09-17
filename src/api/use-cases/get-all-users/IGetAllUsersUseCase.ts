import type User from '../../models/User'

export interface IGetAllUsersUseCase {
  execute: () => Promise<User[]>
}
