import User from "../../models/User"
import PgRepository from "../PgRepository"

class PgCreateUserRepository extends PgRepository {
  constructor() {
    super()
  }
  async CreateUser(user: User): Promise<User> {
    const query = `INSERT INTO "users" (id, name, email, password_hash) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.passwordHash}');`
    const result = await super.query(query)
    return result
  }
}

export default PgCreateUserRepository