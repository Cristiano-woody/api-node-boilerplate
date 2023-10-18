import { type Response, type Request } from 'express'

export interface IUpdateUserController {
  handle: (req: Request, res: Response) => Promise<Response>
}
