import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import { type IUpdateUserUseCase } from './IUpdateUserUseCase'
import UpdateUserUseCase from './UpdateUserUseCase'
import Crypto from '../../helpers/crypto/Crypto'

export const makeUpdateUserUseCase = (): IUpdateUserUseCase => {
  const crypto = new Crypto()
  const userRepository = new PgUserRepository()
  const updateUserUseCase = new UpdateUserUseCase(userRepository, crypto)
  return updateUserUseCase
}
