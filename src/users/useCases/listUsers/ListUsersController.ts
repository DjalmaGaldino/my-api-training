import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUsersUseCase } from './ListUsersUseCase'
import { instanceToInstance } from 'class-transformer'

export class ListUsersController {
  // metodo consstrutor para receber por parametro a instancia do usecase, que é o que manipulo dentro do controller
  // constructor(private listRolesUseCase: ListRolesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)

    const page = request.query.page && Number(request.query.page) > 0
      ? Number(request.query.page)
      : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0
       ? Number(request.query.limit) : 15

    const users = await listUsersUseCase.execute({ page, limit })

    return response.json(instanceToInstance(users))
  }
}

// agora, no arquivo index.ts vai conter as instancias do repositorio, usecase e do controlelr (todas as instancias)
