import { DataSource } from 'typeorm'
import { CreateRolesTable1697216413192 } from './migrations/1697216413192-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1697216413192],
})
