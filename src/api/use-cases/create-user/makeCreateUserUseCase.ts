import CreateUserUseCase from './CreateUserUseCase'
import Crypto from '../../helpers/crypto/Crypto'
import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const userRepository = new PgUserRepository()
  const crypto = new Crypto()
  const createUserUseCase = new CreateUserUseCase(userRepository, crypto)
  return createUserUseCase
}
