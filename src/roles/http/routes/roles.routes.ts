import { Router } from "express";
import { RolesRepository } from "@roles/repositories/RolesRepository";

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const roleAlereadExists = rolesRepository.findByName(name)

  if (roleAlereadExists) {
    return response.status(400).json({ error: 'Role already Exists!'})
  }

  const role = rolesRepository.create({ name })

  return response.status(201).json(role)
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.json(roles)
})

export { rolesRouter }
