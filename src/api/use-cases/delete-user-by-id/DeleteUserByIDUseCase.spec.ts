import { describe, it, expect, beforeEach } from 'vitest'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'
import DeleteUserByIDUseCase from './DeleteUserByIDUseCase'
import User from '../../entities/User'

let userRepository: InMemoryUserRepository
let deleteUserUseCase: DeleteUserByIDUseCase

describe('tests of delete user use case', () => {
  beforeEach(async () => {
    userRepository = new InMemoryUserRepository()
    deleteUserUseCase = new DeleteUserByIDUseCase(userRepository)
    await userRepository.createUser(new User({ name: 'John', email: 'john@example.com', password_hash: '123123', id: '123123' }))
  })

  it('shold be able to delete user', async () => {
    await expect(deleteUserUseCase.execute('123123')).resolves.not.toThrow()
  })

  it('should not be able to delete user unknown', async () => {
    await expect(deleteUserUseCase.execute('12')).rejects.toThrow(Error)
  })
})
