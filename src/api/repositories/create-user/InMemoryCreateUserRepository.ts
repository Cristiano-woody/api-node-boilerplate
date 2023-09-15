import type User from '../../models/User'

class InMemoryCreateUserRepository {
  public users: User[] = []

  async CreateUser (user: User): Promise<User> {
    this.users.push(user)
    return user
  }
}

export default InMemoryCreateUserRepository
