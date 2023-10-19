import TokenJwt from '../../helpers/jwt/TokenJwt'
import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import { type IUserLoginUseCase } from './IUserLoginUseCase'
import UserLoginUseCase from './UserLoginUseCase'
import Crypto from '../../helpers/crypto/Crypto'

export const makeUserLoginUseCase = (): IUserLoginUseCase => {
  const crypto = new Crypto()
  const jwt = new TokenJwt()
  const userRepository = new PgUserRepository()
  return new UserLoginUseCase(userRepository, crypto, jwt)
}
