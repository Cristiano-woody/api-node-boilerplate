import { type Response, type Request } from 'express'

export interface IGetAllUsersController {
  handle: (req: Request, res: Response) => Promise<Response>
}
