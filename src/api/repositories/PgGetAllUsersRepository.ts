import User from "../models/User";
import PgRepository from "./PgRepository";
import { Client } from "pg"

class PgGetAllUsersRepository extends PgRepository {
  private pgClient: Client
  constructor() {
    super()
    this.pgClient = super.connect()
  }
  async execute(): Promise<User[]> {
    await this.pgClient.connect()
    const user = await this.pgClient.query('SELECT * FROM public."user"')
    await this.pgClient.end()
    return user.rows
  }
}

export default PgGetAllUsersRepository
