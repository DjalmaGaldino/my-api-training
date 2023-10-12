import { Role } from "@roles/entities/Role"
import { RolesRepository } from "@roles/repositories/RolesRepository"
import { AppError } from "@shared/errors/AppError"

type CreateRoleDTO = {
  name: string
}

// Aqui estou validando as regras de negócio com relação a criação de roles (não pode existir roles com nomes iguais)
export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlereadExists = this.rolesRepository.findByName(name)

    if (roleAlereadExists) {
      throw new AppError('Role already Exists!')
    }

    return this.rolesRepository.create({ name })
  }
}
