import DBError from '../../../errors/DBError'
import type { Request, Response } from 'express'
import { z } from 'zod'
import { type IGetUserByIDUseCase } from '../../../use-cases/get-user-by-id/IGetUserByIDUseCase'
import { type IGetUserByIdController } from './IGetUserByIdController'
import type User from '../../../entities/User'
import UserNotFoundError from '../../../errors/UserNotFoundError'

class GetUserByIdController implements IGetUserByIdController {
  constructor (private readonly getUserById: IGetUserByIDUseCase) {}

  public async handle (req: Request, res: Response): Promise<Response> {
    const requestSchema = z.object({
      id: z.string()
    })
    const ValidRequest = requestSchema.safeParse(req.params)
    if (!ValidRequest.success) {
      return res.status(400).json(ValidRequest.error)
    }

    try {
      const user = await this.getUserById.execute(req.params.id)
      const userWithoutPassword: Omit<User, 'password_hash'> = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      return res.status(200).send(userWithoutPassword)
    } catch (error) {
      if (error instanceof DBError) {
        return res.status(500).send(error.message)
      }
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ error: error.message })
      }
      return res.status(400).send(error)
    }
  }
}

export default GetUserByIdController
