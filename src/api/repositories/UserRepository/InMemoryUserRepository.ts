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

  async getUserByEmail (userEmail: string): Promise<User | null> {
    const user = this.users.map((usr: User) => {
      if (usr.email === userEmail) {
        return usr
      }
      return null
    })
    return user[0]
  }

  async deleteUserByID (userID: string): Promise<string> {
    const users = this.users.filter(user => user.id !== userID)
    this.users = users

    return userID
  }

  async updateUser (user: User): Promise<void> {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === user.id) {
        this.users[i] = user
        break
      }
    }
  }
}

export default InMemoryUserRepository
