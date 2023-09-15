import type User from '../../models/User'
import PgRepository from '../PgRepository'

class PgGetUserRepository extends PgRepository {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () {
    super()
  }

  async getAllUsers (): Promise<User[]> {
    const query = 'SELECT * FROM "user"'
    const result = await super.query(query)
    return result
  }
}

export default PgGetUserRepository
