import { type Response, type Request } from 'express'

export interface IGetUserByIdController {
  handle: (req: Request, res: Response) => Promise<Response>
}
