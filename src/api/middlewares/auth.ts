import { type Request, type Response, type NextFunction } from 'express'
import TokenJwt from '../helpers/jwt/TokenJwt'

export const auth = (req: Request, res: Response, next: NextFunction): void => {
  let success = false
  const tokenJwt = new TokenJwt()
  if (req.headers.authorization !== undefined) {
    const [authType, token] = req.headers.authorization.split(' ')
    if (authType === 'Bearer') {
      try {
        tokenJwt.decoded(token)
        success = true
      } catch (err) {
        res.status(403).json({ error: 'Não autorizado.' })
        return
      }
    }
  }
  if (success) {
    next()
  } else {
    res.status(403).json({ error: 'Não autorizado.' })
  }
}
