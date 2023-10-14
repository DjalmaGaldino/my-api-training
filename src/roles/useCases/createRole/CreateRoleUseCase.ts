import { Role } from '@roles/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type CreateRoleDTO = {
  name: string
}

// Aqui estou validando as regras de negócio com relação a criação de roles (não pode existir roles com nomes iguais)
@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository
    ) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlereadExists = await this.rolesRepository.findByName(name)

    if (roleAlereadExists) {
      throw new AppError('Role already Exists!')
    }

    return this.rolesRepository.create({ name })
  }
}
