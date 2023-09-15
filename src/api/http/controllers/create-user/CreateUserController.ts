import { type ICreateUserUseCase } from '../../../use-cases/create-user/ICreateUserUseCase'
import { type ICreateUserController } from './ICreateUserController'
import type { Request, Response } from 'express'
import { z } from 'zod'

class CreateUserController implements ICreateUserController {
  constructor (private readonly CreateUserUseCase: ICreateUserUseCase) {}

  public async handle (req: Request, res: Response): Promise<Response> {
    const requestSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6)
    })
    const ValidRequest = requestSchema.safeParse(req.body)
    if (!ValidRequest.success) {
      return res.status(400).json(ValidRequest.error)
    }

    try {
      const user = await this.CreateUserUseCase.execute({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      return res.status(200).send(user)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}

export default CreateUserController
