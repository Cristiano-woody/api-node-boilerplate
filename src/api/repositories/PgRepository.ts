import { Client } from 'pg'
import { env } from '../env/index'
import DBError from '../errors/DBError'

interface queryReturn {
  data: any
  metadata: any
}

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

  async query (sql: string): Promise<queryReturn> {
    try {
      await this._client.connect()
      const result = await this._client.query(sql)
      const resultsJSON = { data: {}, metadata: {} }
      resultsJSON.data = result.rows.map((r) => Object.assign({}, r))
      resultsJSON.metadata = result.fields.map((r) => Object.assign({}, r))
      return resultsJSON
    } catch (error: any) {
      throw new DBError(error.message)
    } finally {
      await this._client.end()
    }
  }

  async command (sql: string): Promise<void> {
    try {
      await this._client.connect()
      await this._client.query(sql)
    } catch (error: any) {
      throw new DBError(error.message)
    } finally {
      await this._client.end()
    }
  }
}

export default PgRepository
