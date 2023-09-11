import express from 'express'
import cors from 'cors'
import userRouter from './http/routes/userRoutes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(userRouter)

export default app
