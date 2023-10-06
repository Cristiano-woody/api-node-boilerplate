import { describe, it, expect, beforeEach, expectTypeOf } from 'vitest'
import UpdateUserUseCase from './UpdateUserUseCase'
import PgUserRepository from '../../repositories/UserRepository/PgUserRepository'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'
import User from '../../entities/User'

let updateUserUsecase: UpdateUserUseCase
let userRepository: PgUserRepository

describe('Update User Use Case', () => {
  beforeEach(async () => {
    userRepository = new PgUserRepository()
    updateUserUsecase = new UpdateUserUseCase(userRepository)
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
    expect(updatedUser.name).to.equal('updated')
  })
})
