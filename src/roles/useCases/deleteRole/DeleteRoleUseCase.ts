import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type DeleteRoleParams = {
  id: string
}

// Aqui estou validando as regras de negócio com relação a criação de roles (não pode existir roles com nomes iguais)
export class DeleteRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found!', 404)
    }

    await this.rolesRepository.delete(role)
  }
}