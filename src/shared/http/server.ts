import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes) // importando minhas rotas

// midlleware de tratamento de erros
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // erro que é uma instancia de appError
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    console.log(error)
    // se não for instancia de appError
    return response.status(500).json({
      status: 'error',
      message: 'Inernal server error :(',
    })
  },
)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}! :) `)
})
