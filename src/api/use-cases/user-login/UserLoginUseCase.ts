import { type IUserRepository } from '../../repositories/UserRepository/IUserRepository'
import { type IUserLoginUseCase } from './IUserLoginUseCase'
import { type UserLoginDTOResponse, type UserLoginDTOResquest } from './UserLoginDTO'
import { type ICrypto } from '../../helpers/crypto/ICrypto'
import { type ITokenJwt } from '../../helpers/jwt/ITokenJwt'
import InvalidCredentialsError from '../../errors/InvalidCredentialsError'

class UserLoginUseCase implements IUserLoginUseCase {
  constructor (private readonly userRepository: IUserRepository, private readonly crypto: ICrypto, private readonly Token: ITokenJwt) {}

  async execute ({ email, password }: UserLoginDTOResquest): Promise<UserLoginDTOResponse> {
    const user = await this.userRepository.getUserByEmail(email)
    if (user === null || user === undefined) {
      throw new InvalidCredentialsError('Invalid email or password.')
    }

    const passwordMatch = await this.crypto.compare(password, user.password_hash)
    if (!passwordMatch) {
      throw new InvalidCredentialsError('Invalid email or password.')
    }

    return {
      token: this.Token.generate(user)
    }
  }
}

export default UserLoginUseCase
