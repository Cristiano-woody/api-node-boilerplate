import { type Response, type Request } from 'express'

export interface IDeleteUserController {
  handle: (req: Request, res: Response) => Promise<Response>
}
