import type User from '../../models/User'

export interface IGetUserRepository {
  getAllUsers: () => Promise<User[]>
}
