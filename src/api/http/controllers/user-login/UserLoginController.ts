import { type IUserLoginUseCase } from '../../../use-cases/user-login/IUserLoginUseCase'
import { type IUserLoginController } from './IUserLoginController'
import { z } from 'zod'
import DBError from '../../../errors/DBError'
import type { Request, Response } from 'express'
import InvalidCredentialsError from '../../../errors/InvalidCredentialsError'

class UserLogincontroller implements IUserLoginController {
  constructor (private readonly userLogin: IUserLoginUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const bodyRequestSchema = z.object({
      email: z.string().email(),
      password: z.string()
    })
    const validBodyRequestSchema = bodyRequestSchema.safeParse(req.body)
    if (!validBodyRequestSchema.success) {
      return res.status(400).json(validBodyRequestSchema.error)
    }

    try {
      const token = await this.userLogin.execute(validBodyRequestSchema.data)
      return res.status(200).send(token)
    } catch (error) {
      if (error instanceof DBError) {
        return res.status(500).send(error.message)
      }
      if (error instanceof InvalidCredentialsError) {
        return res.status(404).send({ error: error.message })
      }
      return res.status(400).send(error)
    }
  }
}

export default UserLogincontroller
