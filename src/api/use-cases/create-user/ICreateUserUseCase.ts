import type User from '../../models/User'
import { type CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'

export interface ICreateUserUseCase {
  execute: (data: CreateUserUseCaseDTO) => Promise<Omit<User, 'passwordHash'>>
}
