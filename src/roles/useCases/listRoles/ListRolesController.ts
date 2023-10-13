import { Request, Response } from 'express'
import { ListRolesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  // metodo consstrutor para receber por parametro a instancia do usecase, que é o que manipulo dentro do controller
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page = request.query.page && Number(request.query.page) > 0
      ? Number(request.query.page)
      : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0
       ? Number(request.query.limit) : 15

    const roles = await this.listRolesUseCase.execute({ page, limit })

    return response.json(roles)
  }
}

// agora, no arquivo index.ts vai conter as instancias do repositorio, usecase e do controlelr (todas as instancias)
