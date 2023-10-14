import { Response, Request } from 'express'
import { container, inject, injectable } from 'tsyringe'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase)
    const { name } = request.body
    const role = await createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
