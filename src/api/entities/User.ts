import { randomUUID } from 'crypto'

class User {
  public name: string
  public email: string
  public password_hash: string
  public id?: string
  constructor (user: {
    name: string
    email: string
    password_hash: string
    id?: string
  }) {
    this.name = user.name
    this.email = user.email
    this.password_hash = user.password_hash
    this.id = user.id
    if (user.id === null || user.id === undefined) {
      this.id = randomUUID()
    }
  }
}

export default User
