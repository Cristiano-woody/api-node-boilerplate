import { type Response, type Request } from 'express'

export interface ICreateUserController {
  handle: (req: Request, res: Response) => Promise<Response>
}
