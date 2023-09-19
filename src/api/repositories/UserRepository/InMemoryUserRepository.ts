import type User from '../../entities/User'
import { type IUserRepository } from './IUserRepository'

class InMemoryUserRepository implements IUserRepository {
  public users: User[] = []

  async createUser (user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async getAllUsers (): Promise<User[]> {
    return this.users
  }
}

export default InMemoryUserRepository
