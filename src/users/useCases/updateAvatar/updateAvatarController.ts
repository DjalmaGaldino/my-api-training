import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { instanceToInstance } from 'class-transformer'
import { UpdateAvatarUseCase } from './UpdateAvatarUseCase'

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarCase = container.resolve(UpdateAvatarUseCase)

    const user = await updateAvatarCase.execute({
      userId: request.user.id,
      avatarFilename: request.file.filename
    })
    return response.json(instanceToInstance(user))
    // este método instance to instace vai usar o exclude da entidade User
  }
}
