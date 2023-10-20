import DBError from '../../../errors/DBError'
import type { Request, Response } from 'express'
import { z } from 'zod'
import { type IDeleteUserByIdController } from './IDeleteUserByIdController'
import { type IDeleteUserByIDUseCase } from '../../../use-cases/delete-user-by-id/IDeleteUserByIDUseCase'
import UserNotFoundError from '../../../errors/UserNotFoundError'

class DeleteUserByIdController implements IDeleteUserByIdController {
  constructor (private readonly deleteUserByIDUseCase: IDeleteUserByIDUseCase) {}

  public async handle (req: Request, res: Response): Promise<Response> {
    const requestSchema = z.object({
      id: z.string().length(36)
    })
    const ValidRequest = requestSchema.safeParse(req.params)
    if (!ValidRequest.success) {
      return res.status(400).json(ValidRequest.error)
    }

    try {
      const user = await this.deleteUserByIDUseCase.execute(req.params.id)
      return res.status(200).send(user)
    } catch (error) {
      if (error instanceof DBError) {
        return res.status(500).send(error.message)
      }
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ error: error.message })
      }
      return res.status(500).send(error)
    }
  }
}

export default DeleteUserByIdController
