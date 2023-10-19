import { env } from '../../env'
import { type ITokenJwt } from './ITokenJwt'
import jwt from 'jsonwebtoken'

class TokenJwt implements ITokenJwt {
  generate (data: any): string {
    return jwt.sign(data, env.JWT_PRIVATE_KEY, { expiresIn: '6h' })
  }

  decoded (token: any): any {
    const result = jwt.verify(token, env.JWT_PRIVATE_KEY)
    return result
  }
}

export default TokenJwt
