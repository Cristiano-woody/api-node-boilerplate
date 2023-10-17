import { type Request, type Response, Router } from 'express'
import { makeCreateUserController } from '../controllers/create-user/makeCreateUserController'
import { makeGetAllUsersController } from '../controllers/get-all-users/makeGetAllUsersController'
import { makeDeleteUserController } from '../controllers/delete-user/makeDeleteUserController'

const userRouter = Router()

userRouter.post('/user', (req: Request, res: Response) => { void makeCreateUserController().handle(req, res) })

userRouter.get('/user', (req: Request, res: Response) => { void makeGetAllUsersController().handle(req, res) })

userRouter.delete('/user/:id', (req: Request, res: Response) => { void makeDeleteUserController().handle(req, res) })

export default userRouter
