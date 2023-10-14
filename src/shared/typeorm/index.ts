import { DataSource } from 'typeorm'
import { CreateRolesTable1697216413192 } from './migrations/1697216413192-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1697320339993 } from './migrations/1697320339993-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [ Role ],
  migrations: [CreateRolesTable1697216413192, CreateUsersTable1697320339993],
})
