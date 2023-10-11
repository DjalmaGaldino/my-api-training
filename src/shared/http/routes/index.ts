import { Router } from "express"
import { rolesRouter } from "@roles/http/routes/roles.routes"

const routes = Router()

routes.get('/', (request, response) => {
  // throw new Error('Acesso negado')
  return response.json({ message: 'Hello Dev!' })
})

routes.use('/roles', rolesRouter)


export { routes }
