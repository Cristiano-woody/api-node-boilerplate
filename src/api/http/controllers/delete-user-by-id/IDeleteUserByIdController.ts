import { type Response, type Request } from 'express'

export interface IDeleteUserByIdController {
  handle: (req: Request, res: Response) => Promise<Response>
}
