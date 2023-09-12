import { Client } from "pg"
import { env } from "../env"

abstract class PgRepository {
  connect(): Client {
    return new Client({
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: 'postgres',
      password: "postgres",
    })
  }
}

export default PgRepository