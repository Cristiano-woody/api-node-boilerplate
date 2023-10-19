import { makeUserLoginUseCase } from '../../../use-cases/user-login/makeUserLoginUseCase'
import { type IUserLoginController } from './IUserLoginController'
import UserLogincontroller from './UserLoginController'

export const makeUserLoginController = (): IUserLoginController => {
  const userloginUseCase = makeUserLoginUseCase()
  return new UserLogincontroller(userloginUseCase)
}
