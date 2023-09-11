import { randomUUID } from 'crypto'

class User {
  private name: string
  private email: string
  private passwordHash: string
  private id?: string
  constructor(user: {
    name: string
    email: string
    passwordHash: string
    id?: string
  }) {
    this.name = user.name
    this.email = user.email
    this.passwordHash = user.passwordHash
    this.id = user.id
    if (!user.id) {
      this.id = randomUUID()
    }
  }
}

export default User
