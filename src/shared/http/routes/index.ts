import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'
import { usersRouter } from '@users/http/user.routes'

const routes = Router()

routes.get('/', (request, response) => {
  // throw new Error('Acesso negado')
  return response.json({ message: 'Hello Dev!' })
})

// fazendo importação das rotas de role
routes.use('/roles', rolesRouter)

// fazendo importação das rotas de user
routes.use('/users', usersRouter)

export { routes }
