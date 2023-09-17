import { Client } from 'pg'
import { env } from '../env/index'

abstract class PgRepository {
  private readonly _client: Client
  constructor () {
    this._client = new Client({
      host: env.PG_HOST,
      port: env.PG_PORT,
      database: env.PG_DATABASE,
      user: env.PG_USER,
      password: env.PG_PASS
    })
  }

  async query (sql: string): Promise<any> {
    await this._client.connect()
    const result = await this._client?.query(sql)
    await this._client.end()
    return result
  }
}

export default PgRepository
