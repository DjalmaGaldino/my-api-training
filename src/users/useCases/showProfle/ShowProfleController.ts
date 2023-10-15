import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { instanceToInstance } from 'class-transformer'
import { ShowProfileUseCase } from './ShowProfileUseCase'

export class ShowProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUseCase = container.resolve(ShowProfileUseCase)
    const userId = request.user.id

    const user = await showProfileUseCase.execute({ userId })

    return response.status(201).json(instanceToInstance(user))
    // este método instance to instace vai usar o exclude da entidade User
  }
}
