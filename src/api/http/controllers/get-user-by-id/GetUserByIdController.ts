import DBError from '../../../errors/DBError'
import type { Request, Response } from 'express'
import { z } from 'zod'
import { type IGetUserByIDUseCase } from '../../../use-cases/get-user-by-id/IGetUserByIDUseCase'
import { type IGetUserByIdController } from './IGetUserByIdController'

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
      return res.status(200).send(user)
    } catch (error) {
      if (error instanceof DBError) {
        return res.status(500).send(error.message)
      }
      return res.status(400).send(error)
    }
  }
}

export default GetUserByIdController
