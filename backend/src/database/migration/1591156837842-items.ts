import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class items1591156837842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            type: 'int'
          },

          { name: 'title', type: 'varchar', isNullable: false },
          { name: 'image', type: 'varchar', isNullable: false }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items')
  }
}
