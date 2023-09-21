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

  async getUserByID (userId: string): Promise<User | null> {
    const user = this.users.map((usr: User) => {
      if (usr.id === userId) {
        return usr
      }
      return null
    })
    return user[0]
  }
}

export default InMemoryUserRepository
