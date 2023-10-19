import { type Request, type Response, Router } from 'express'
import { makeCreateUserController } from '../controllers/create-user/makeCreateUserController'
import { makeGetAllUsersController } from '../controllers/get-all-users/makeGetAllUsersController'
import { makeDeleteUserController } from '../controllers/delete-user-by-id/makeDeleteUserController'
import { makeGetUserByIdController } from '../controllers/get-user-by-id/makeGetUserByIdController'
import { makeUpdateUserController } from '../controllers/update-user/makeUpdateUserController'
import { auth } from '../../middlewares/auth'
import { makeUserLoginController } from '../controllers/user-login/makeUserLoginController'

const userRouter = Router()

userRouter.post('/user', (req: Request, res: Response) => { void makeCreateUserController().handle(req, res) })

userRouter.get('/user', auth, (req: Request, res: Response) => { void makeGetAllUsersController().handle(req, res) })

userRouter.get('/user/:id', auth, (req: Request, res: Response) => { void makeGetUserByIdController().handle(req, res) })

userRouter.delete('/user/:id', auth, (req: Request, res: Response) => { void makeDeleteUserController().handle(req, res) })

userRouter.put('/user/:id', auth, (req: Request, res: Response) => { void makeUpdateUserController().handle(req, res) })

userRouter.post('/user/auth', (req: Request, res: Response) => { void makeUserLoginController().handle(req, res) })

export default userRouter
