import type User from '../../entities/User'

export interface IDeleteUserByIDUseCase {
  execute: (userID: string) => Promise<Omit<User, 'password_hash'>>
}
