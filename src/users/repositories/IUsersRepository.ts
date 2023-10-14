import { Role } from "@roles/entities/Role"
import { User } from "@users/entities/User"

export type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdmin: boolean
  role: Role
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type UserPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: User[]
}

export interface IUsersRepository {
  create({ name, email, password, isAdmin, role }: CreateUserDTO): Promise<User>
  save(user: User): Promise<User>
  findAll({ page, skip, take }: PaginateParams): Promise<UserPaginateProperties>
  findById(id: string): Promise<User | null>
  findByName(name: string): Promise<User | null>
  delete(user: User): Promise<void>
}
