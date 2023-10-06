import { describe, it, expect, beforeEach } from 'vitest'
import UpdateUserUseCase from './UpdateUserUseCase'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'
import User from '../../entities/User'
import InMemoryUserRepository from '../../repositories/UserRepository/InMemoryUserRepository'
import Crypto from '../../helpers/crypto/Crypto'

let updateUserUsecase: UpdateUserUseCase
let userRepository: InMemoryUserRepository
let crypto: Crypto

describe('Update User Use Case', () => {
  beforeEach(async () => {
    userRepository = new InMemoryUserRepository()
    crypto = new Crypto()
    updateUserUsecase = new UpdateUserUseCase(userRepository, crypto)
    await userRepository.createUser(
      new User({
        name: 'John',
        email: '123@gm.com',
        password_hash: '123123',
        id: '123123'
      }))
  })

  it('shold be able to update user name', async () => {
    const updatedData: UpdateUserUseCaseDTO = {
      name: 'updated'
    }
    await updateUserUsecase.execute(updatedData, '123123')
    const updatedUser = await userRepository.getUserByID('123123')
    console.log(updatedUser)
    expect(updatedUser?.name).to.equal('updated')
  })

  it('shold not be able to updated user with invalid id', async () => {
    const updatedData: UpdateUserUseCaseDTO = {
      name: 'updated'
    }
    await expect(updateUserUsecase.execute(updatedData, '0000')).rejects.toThrow(Error)
  })
  it('shold be able to update user name', async () => {
    const updatedData: UpdateUserUseCaseDTO = {
      name: 'updated',
      email: 'updated@example.com'
    }
    await updateUserUsecase.execute(updatedData, '123123')
    const updatedUser = await userRepository.getUserByID('123123')
    console.log(updatedUser)
    expect(updatedUser?.email).to.equal('updated@example.com')
  })
})
