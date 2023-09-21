import type User from '../../entities/User'

export interface IUserRepository {
  createUser: (user: User) => Promise<User>
  getAllUsers: () => Promise<Omit<User[], 'password_hash'>>
  getUserByID: (userId: string) => Promise<User | null>
}
