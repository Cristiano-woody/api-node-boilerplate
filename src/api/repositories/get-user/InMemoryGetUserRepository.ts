import type User from '../../models/User'
import { type IGetUserRepository } from './IGetUserRepository'

class InMemoryGetUserRepository implements IGetUserRepository {
  public users: User[] = []
  async getAllUsers (): Promise<User[]> {
    return this.users
  }

  // metodo auxiliar para teste do caso de uso
  async createUser (user: User): Promise<User> {
    this.users.push(user)
    return user
  }
}

export default InMemoryGetUserRepository
