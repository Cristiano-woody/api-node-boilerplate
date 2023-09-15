import PgCreateUserRepository from '../../repositories/create-user/PgCreateUserRepository'
import CreateUserUseCase from './CreateUserUseCase'
import Crypto from '../../helpers/crypto/Crypto'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserRepository = new PgCreateUserRepository()
  const crypto = new Crypto()
  const createUserUseCase = new CreateUserUseCase(createUserRepository, crypto)
  return createUserUseCase
}
