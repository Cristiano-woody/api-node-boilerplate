import type User from '../../entities/User'

export interface IGetUserByIDUseCase {
  execute: (userID: string) => Promise<User>
}
