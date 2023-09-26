import type User from '../../entities/User'

export interface IGetAllUsersUseCase {
  execute: () => Promise<Omit<User[], 'password_hash'>>
}
