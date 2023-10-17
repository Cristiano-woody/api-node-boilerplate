import { Client } from 'pg'
import { env } from '../env/index'
import DBError from '../errors/DBError'

interface queryReturn {
  data: any
  metadata: any
}

abstract class PgRepository {
  private readonly db_config = {
    host: env.PG_HOST,
    port: env.PG_PORT,
    database: env.PG_DATABASE,
    user: env.PG_USER,
    password: env.PG_PASS
  }

  async query (sql: string): Promise<queryReturn> {
    const client = new Client(this.db_config)
    try {
      await client.connect()
      const result = await client.query(sql)
      const resultsJSON = { data: {}, metadata: {} }
      resultsJSON.data = result.rows.map((r) => Object.assign({}, r))
      resultsJSON.metadata = result.fields.map((r) => Object.assign({}, r))
      return resultsJSON
    } catch (error: any) {
      throw new DBError(error.message)
    } finally {
      await client.end()
    }
  }

  async command (sql: string, rows: any[]): Promise<void> {
    const client = new Client(this.db_config)
    try {
      await client.connect()
      await client.query(sql, rows)
    } catch (error: any) {
      throw new DBError(error.message)
    } finally {
      await client.end()
    }
  }
}

export default PgRepository
