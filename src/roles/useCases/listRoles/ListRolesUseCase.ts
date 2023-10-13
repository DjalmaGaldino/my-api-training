import { RolesPaginateProperties, RolesRepository } from '@roles/repositories/RolesRepository'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

// usecase para listagem das roles -> deve se criar o controller
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({  limit, page }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = Number((page - 1)) * take
    const roles = await this.rolesRepository.findAll({ page, skip, take })

    return roles
  }
}
