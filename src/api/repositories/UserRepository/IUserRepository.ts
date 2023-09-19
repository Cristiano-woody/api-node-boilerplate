import type User from '../../entities/User'

export interface IUserRepository {
  createUser: (user: User) => Promise<User>
  getAllUsers: () => Promise<User[]>
}
