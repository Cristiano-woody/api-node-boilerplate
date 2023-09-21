import type User from '../../entities/User'
import { type CreateUserUseCaseDTO } from './CreateUserUseCaseDTO'

export interface ICreateUserUseCase {
  execute: (data: CreateUserUseCaseDTO) => Promise<Omit<User, 'password_hash'>>
}
