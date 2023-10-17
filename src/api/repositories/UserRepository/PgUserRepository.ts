import type User from '../../entities/User'
import PgRepository from '../PgRepository'
import { type IUserRepository } from './IUserRepository'

class PgUserRepository extends PgRepository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () {
    super()
  }

  async createUser (user: User): Promise<User> {
    const query = 'INSERT INTO "users" (id, name, email, password_hash) VALUES ($1, $2, $3, $4);'
    await super.command(query, [user.id, user.name, user.email, user.password_hash])
    return user
  }

  async getAllUsers (): Promise<Omit<User[], 'password_hash'>> {
    const query = 'SELECT id, name, email FROM "users"'
    const result = await super.query(query)
    return result.data
  }

  async getUserByID (userID: string): Promise<User> {
    const user = await super.query(`SELECT id, name, email, password_hash FROM users WHERE id = '${userID}';`)
    return user.data
  }

  async deleteUserByID (userID: string): Promise<string> {
    await super.command('DELETE FROM users WHERE id = $1;', [userID])
    return userID
  }

  async updateUser (user: User): Promise<void> {
    await super.command('UPDATE users SET name = $2 = $3 password_hash = $4 WHERE id = $5;', [user.name, user.email, user.password_hash, user.id])
  }
}

export default PgUserRepository
