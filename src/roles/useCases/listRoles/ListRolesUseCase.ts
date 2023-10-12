import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'

// usecase para listagem das roles -> deve se criar o controller
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
