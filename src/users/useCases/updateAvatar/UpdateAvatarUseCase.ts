import path from 'node:path'
import { AppError } from '@shared/errors/AppError'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { injectable, inject } from 'tsyringe'
import { User } from '@users/entities/User'
import uploadConfig from '@config/upload'
import fs from 'node:fs'

export type UpdateAvatarDTO = {
  userId: string
  avatarFilename: string
}

@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ avatarFilename, userId }: UpdateAvatarDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401)
    }

    if (user.avatar) {
      const userAvaterFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = await fs.promises.stat(userAvaterFilePath)

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvaterFilePath)
      }
    }
    user.avatar = avatarFilename
    return this.usersRepository.save(user)
  }
}
