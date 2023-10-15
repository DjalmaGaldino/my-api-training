import { inject, injectable } from 'tsyringe'
import {  } from '@shared/container'
import { IUsersRepository, UserPaginateProperties } from '@users/repositories/IUsersRepository'

type ListUsersUseCaseParams = {
  page: number
  limit: number
}

// usecase para listagem das roles -> deve se criar o controller
@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({  limit, page }: ListUsersUseCaseParams): Promise<UserPaginateProperties> {
    const take = limit
    const skip = Number((page - 1)) * take
    const roles = await this.usersRepository.findAll({ page, skip, take })

    return roles
  }
}
