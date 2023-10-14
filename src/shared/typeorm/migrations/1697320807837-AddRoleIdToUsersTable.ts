import { query } from "express"
import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

// adicionando uma coluna a uma tabela existente
export class AddRoleIdToUsersTable1697320807837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'roleId',
        type: 'uuid',
        isNullable: true
      })
      )
      // ADICONANDO A COLUNUMA RECEM CRIADA A CHAVE ESTRANGEIRA USANDO O ID DA TABELA ROLE
      await queryRunner.createForeignKey('users', new TableForeignKey({
        name: 'UsersRoles',
        columnNames: ['roleId'],
        referencedTableName: 'roles',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'UsersRoles')
      await queryRunner.dropColumn('users', 'roleId')
    }

}
