import { DataSource } from 'typeorm'
import { CreateRolesTable1697216413192 } from './migrations/1697216413192-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [ Role ],
  migrations: [CreateRolesTable1697216413192],
})
