import { type UserLoginDTOResponse, type UserLoginDTOResquest } from './UserLoginDTO'

export interface IUserLoginUseCase {
  execute: ({ email, password }: UserLoginDTOResquest) => Promise<UserLoginDTOResponse | undefined>
}
