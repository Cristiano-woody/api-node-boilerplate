import type User from '../../models/User'
import PgRepository from '../PgRepository'

class PgCreateUserRepository extends PgRepository {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () {
    super()
  }

  async CreateUser (user: User): Promise<User> {
    const query = `INSERT INTO "users" (id, name, email, password_hash) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.passwordHash}');`
    await super.query(query)
    return user
  }
}

export default PgCreateUserRepository
