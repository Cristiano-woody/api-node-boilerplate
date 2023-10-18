import DBError from '../../../errors/DBError'
import type { Request, Response } from 'express'
import { z } from 'zod'
import { type IUpdateUserController } from './IUpdateUserController'
import { type IUpdateUserUseCase } from '../../../use-cases/update-user/IUpdateUserUseCase'

class UpdateUserController implements IUpdateUserController {
  constructor (private readonly updateUser: IUpdateUserUseCase) {}

  public async handle (req: Request, res: Response): Promise<Response> {
    const paramsRequestSchema = z.object({
      id: z.string()
    })
    const validParamsRequest = paramsRequestSchema.safeParse(req.params)
    if (!validParamsRequest.success) {
      return res.status(400).json(validParamsRequest.error)
    }

    try {
      const user = await this.updateUser.execute(req.body, req.params.id)
      const userWithoutPassword = {
        id: user?.id,
        name: user?.name,
        email: user?.email
      }
      return res.status(200).send(userWithoutPassword)
    } catch (error) {
      if (error instanceof DBError) {
        return res.status(500).send(error.message)
      }
      return res.status(400).send(error)
    }
  }
}

export default UpdateUserController
