import { type ICrypto } from './ICrypto'
import { hash, compare } from 'bcryptjs'

class Crypto implements ICrypto {
  async hash (data: string): Promise<string> {
    return await hash(data, 6)
  }

  async compare (data: string, hash: string): Promise<boolean> {
    return await compare(data, hash)
  }
}

export default Crypto
