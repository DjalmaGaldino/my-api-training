import { Role } from "@roles/entities/Role"

type CreateRoleDTO = {
  name: string
}

export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }

  create({ name }: CreateRoleDTO): Role {
  // uma instacia da classe Role() e ja tem um id atribuido, pois o construtor foi executado
  const role = new Role()

  // para juntar os dois objetos, fazer um merge entre role e o objeto do segundo parametro
  Object.assign(role, {
    name,
    created_at: new Date()
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
