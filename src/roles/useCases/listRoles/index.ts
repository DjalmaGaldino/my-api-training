import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRepository = new RolesRepository()
// recebe o repositorio por parametro:
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
// export porque vou precisar dele na rota e recebe a instancia do usecase por parametro:
export const listRolesController = new ListRolesController(listRolesUseCase)
