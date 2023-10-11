import { Role } from "@roles/entities/Role";
import { Router } from "express";

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  // uma instacia da classe Role() e ja tem um id atribuido, pois o construtor foi executado
  const role = new Role()

  // para juntar os dois objetos, fazer um merge entre role e o objeto do segundo parametro
  Object.assign(role, {
    name,
    created_at: new Date()
  })

  roles.push(role)

  return response.status(201).json(role)
})

export { rolesRouter }
