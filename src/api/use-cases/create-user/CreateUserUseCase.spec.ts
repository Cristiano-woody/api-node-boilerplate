import { describe, it, expect, beforeEach } from 'vitest'
import InMemoryCreateUserRepository from '../../repositories/create-user/InMemoryCreateUserRepository'
import Crypto from '../../helpers/crypto/Crypto'
import CreateUserUseCase from './CreateUserUseCase'

let createUserRepository: InMemoryCreateUserRepository
let crypto: Crypto
let createUserUseCase: CreateUserUseCase

describe('tests of Create User use case', () => {
  beforeEach(() => {
    createUserRepository = new InMemoryCreateUserRepository()
    crypto = new Crypto()
    createUserUseCase = new CreateUserUseCase(createUserRepository, crypto)
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
