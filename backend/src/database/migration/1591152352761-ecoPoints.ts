import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ecoPoints1591152352761 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EcoPoints',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          { name: 'image', type: 'varchar', isNullable: false },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'email', type: 'varchar', isNullable: false, isUnique: true },
          { name: 'whatsapp', type: 'varchar', isNullable: false },
          { name: 'latitude', type: 'float', isNullable: false },
          { name: 'longitude', type: 'float', isNullable: false },
          { name: 'city', type: 'varchar', isNullable: false },
          { name: 'uf', type: 'varchar', isNullable: false }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('EcoPoints')
  }
}
