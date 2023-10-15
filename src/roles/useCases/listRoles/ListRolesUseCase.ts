import {
  IRolesRepository,
  RolesPaginateProperties,
} from '@roles/repositories/IRolesRepository'
import {} from '@shared/container'
import { inject, injectable } from 'tsyringe'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

// usecase para listagem das roles -> deve se criar o controller
@injectable()
export class ListRolesUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = Number(page - 1) * take
    const roles = await this.rolesRepository.findAll({ page, skip, take })

    return roles
  }
}
