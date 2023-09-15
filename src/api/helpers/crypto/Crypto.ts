import { type ICrypto } from './ICrypto'
import { hash } from 'bcryptjs'

class Crypto implements ICrypto {
  async hash (data: string): Promise<string> {
    return await hash(data, 6)
  }
}

export default Crypto
