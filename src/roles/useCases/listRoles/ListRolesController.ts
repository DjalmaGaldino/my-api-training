import { Request, Response } from 'express'
import { ListRolesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  // metodo consstrutor para receber por parametro a instancia do usecase, que é o que manipulo dentro do controller
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute()

    return response.json(roles)
  }
}

// agora, no arquivo index.ts vai conter as instancias do repositorio, usecase e do controlelr (todas as instancias)
