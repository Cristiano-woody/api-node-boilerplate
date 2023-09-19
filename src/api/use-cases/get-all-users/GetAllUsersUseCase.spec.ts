import { describe, it, expect, beforeEach } from 'vitest'
import GetAllUsersUseCase from './GetAllUsersUseCase'
import User from '../../entities/User'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'

let userRepository: InMemoryUserRepository
let getAllUsersUseCase: GetAllUsersUseCase
describe('tests of get all users use case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
  })
  it('shold be able to get all users', async () => {
    await expect(getAllUsersUseCase.execute()).resolves.not.toThrow()
  })
  it('should be able to check if this method returns an array', async () => {
    const users = await getAllUsersUseCase.execute()
    expect(Array.isArray(users)).toEqual(true)
  })
  it('should be able to check if this return of method he has user properties', async () => {
    await userRepository.createUser(new User({ name: 'cris', email: 'cis@example.com', passwordHash: '123123' }))
    const users = await getAllUsersUseCase.execute()
    expect(users[0]).toHaveProperty('name')
    expect(users[0]).toHaveProperty('id')
    expect(users[0]).toHaveProperty('passwordHash')
  })
})
