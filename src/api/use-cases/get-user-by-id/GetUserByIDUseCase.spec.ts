import { describe, it, expect, beforeEach } from 'vitest'
import GetUserByIDUseCase from './GetUserByIDUseCase'
import User from '../../entities/User'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'

let userRepository: InMemoryUserRepository
let getUserById: GetUserByIDUseCase

describe('testing Get User by id Use Case', () => {
  beforeEach(async () => {
    userRepository = new InMemoryUserRepository()
    getUserById = new GetUserByIDUseCase(userRepository)
    await userRepository.createUser(
      new User({
        name: 'John',
        email: '123@gm.com',
        password_hash: '123123',
        id: '123123'
      }))
  })
  it('shold be able to get user by id', async () => {
    const user = await getUserById.execute('123123')
    expect(user).toBeInstanceOf(User)
  })
  it('should be able to get user by id and check if it have the properties of user', async () => {
    const user = await getUserById.execute('123123')
    expect(user).toHaveProperty('name')
    expect(user.name).toEqual('John')
    expect(user.password_hash).toEqual('123123')
    expect(user.email).toEqual('123@gm.com')
  })
})
