import { Request, Response, Router } from 'express'
import { makeCreateUserController } from '../controllers/create-user/makeCreateUserController'

const userRouter = Router()

userRouter.post('/user', (req: Request, res: Response) => {
  makeCreateUserController().handle(req, res)
})

export default userRouter
