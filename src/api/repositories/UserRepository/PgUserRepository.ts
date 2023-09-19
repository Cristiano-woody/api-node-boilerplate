import type User from '../../entities/User'
import PgRepository from '../PgRepository'
import { type IUserRepository } from './IUserRepository'

class PgUserRepository extends PgRepository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () {
    super()
  }

  async createUser (user: User): Promise<User> {
    const query = `INSERT INTO "users" (id, name, email, password_hash) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.passwordHash}');`
    await super.command(query)
    return user
  }

  async getAllUsers (): Promise<User[]> {
    const query = 'SELECT * FROM "users"'
    const result = await super.query(query)
    return result
  }
}

export default PgUserRepository
