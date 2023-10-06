import type User from '../../entities/User'
import { type UpdateUserUseCaseDTO } from './UpdateUserUseCaseDTO'

export interface IUpdateUserUseCase {
  execute: (data: UpdateUserUseCaseDTO, userID: string) => Promise<User | null>
}
