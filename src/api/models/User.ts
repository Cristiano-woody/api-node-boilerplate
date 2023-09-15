import { randomUUID } from 'crypto'

class User {
  public name: string
  public email: string
  public passwordHash: string
  public id?: string
  constructor (user: {
    name: string
    email: string
    passwordHash: string
    id?: string
  }) {
    this.name = user.name
    this.email = user.email
    this.passwordHash = user.passwordHash
    this.id = user.id
    if (user.id === null || user.id === undefined) {
      this.id = randomUUID()
    }
  }
}

export default User
