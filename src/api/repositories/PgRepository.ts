import { Client } from "pg"
import { env } from "../env"

abstract class PgRepository {
  private _client: Client
  constructor() {
    this._client = new Client({
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: 'postgres',
      password: "postgres",
    })
  }

  async query(sql: string): Promise<any> {
    this._client.connect()
    const result = await this._client?.query(sql)
    this._client.end()
    return result
  }

  async comand(): Promise<void> {

  }
}

export default PgRepository