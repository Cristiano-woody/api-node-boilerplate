import { describe, it, expect, beforeEach } from 'vitest'
import Crypto from '../../helpers/crypto/Crypto'
import CreateUserUseCase from './CreateUserUseCase'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'

let userRepository: InMemoryUserRepository
let crypto: Crypto
let createUserUseCase: CreateUserUseCase

describe('tests of Create User use case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    crypto = new Crypto()
    createUserUseCase = new CreateUserUseCase(userRepository, crypto)
  })

  it('should be able create a user', async () => {
    const newUser = {
      name: 'newUser',
      email: 'newUser@example.com',
      password: 'UserPassword'
    }
    await expect(createUserUseCase.execute(newUser)).resolves.not.toThrow()
  })
})
