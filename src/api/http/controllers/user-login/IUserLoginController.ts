import type { Request, Response } from 'express'

export interface IUserLoginController {
  handle: (req: Request, res: Response) => Promise<Response>
}
