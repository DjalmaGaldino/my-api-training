import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}

export class RolesRepository {
  private roles: Role[]
  private static INSTANCE: RolesRepository

  // com esse private não será possível mais nenhum lugar fazer um new (instanciar a classe)
  private constructor() {
    this.roles = []
  }

  // criando um método para garantir que a instancia seja unica
  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }

    return RolesRepository.INSTANCE
  }

  create({ name }: CreateRoleDTO): Role {
    // uma instacia da classe Role() e ja tem um id atribuido, pois o construtor foi executado
    const role = new Role()

    // para juntar os dois objetos, fazer um merge entre role e o objeto do segundo parametro
    Object.assign(role, {
      name,
      created_at: new Date(),
    })

    this.roles.push(role)
    return role
  }

  // listando todos os dados
  findAll(): Role[] {
    return this.roles
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name === name)
  }
}
