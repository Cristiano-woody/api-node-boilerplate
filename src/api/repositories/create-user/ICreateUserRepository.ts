import type User from '../../models/User'

export interface ICreateUserRepository {
  CreateUser: (user: User) => Promise<User>
}
