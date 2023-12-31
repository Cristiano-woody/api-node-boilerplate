import type User from '../../entities/User'

export interface IUserRepository {
  createUser: (user: User) => Promise<User>
  getAllUsers: () => Promise<Omit<User[], 'password_hash'>>
  getUserByID: (userId: string) => Promise<User | null>
  getUserByEmail: (email: string) => Promise<User | null>
  deleteUserByID: (userID: string) => Promise<string>
  updateUser: (user: User) => Promise<void>
}
