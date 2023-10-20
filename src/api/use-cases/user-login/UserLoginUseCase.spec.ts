import { describe, it, expect, beforeEach } from 'vitest'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'
import { type IUserLoginUseCase } from './IUserLoginUseCase'
import UserLoginUseCase from './UserLoginUseCase'
import Crypto from '../../helpers/crypto/Crypto'
import { type ICrypto } from '../../helpers/crypto/ICrypto'
import { type ITokenJwt } from '../../helpers/jwt/ITokenJwt'
import TokenJwt from '../../helpers/jwt/TokenJwt'
import User from '../../entities/User'

let userRepository: InMemoryUserRepository
let userLoginUseCase: IUserLoginUseCase
let crypto: ICrypto
let tokenJwt: ITokenJwt

describe('Test for user login use case', () => {
  beforeEach(async () => {
    userRepository = new InMemoryUserRepository()
    crypto = new Crypto()
    tokenJwt = new TokenJwt()
    userLoginUseCase = new UserLoginUseCase(userRepository, crypto, tokenJwt)

    await userRepository.createUser(
      new User({
        name: 'John',
        email: '123@gm.com',
        password_hash: await crypto.hash('123123'),
        id: '123123'
      }))
  })

  it('shold be able to login user', async () => {
    await expect(userLoginUseCase.execute({ email: '123@gm.com', password: '123123' })).resolves.not.toThrow()
  })
})
