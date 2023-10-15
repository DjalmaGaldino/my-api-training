
// fazendo um override para definição de tipagem do Request do express. Adicionanto o tipo user dentro da tipagem do express. Mantem o que ja existe e adiciona essa nova.

declare namespace Express {
 export interface Request {
    user: {
      id: string
    }
  }
}
