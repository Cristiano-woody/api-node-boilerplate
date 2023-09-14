import User from "../../models/User"
import PgRepository from "../PgRepository"
import { Client } from "pg"

class PgGetUserRepository extends PgRepository {
  constructor() {
    super()
  }
  async getAllUsers(): Promise<User[]> {
    const query = 'SELECT * FROM "user"'
    const result = await super.query(query)
    return result
  }
}

export default PgGetUserRepository
