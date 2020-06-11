import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedItems1591160948505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Lampadas', 'lampadas.svg')`
    )
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Pilhas e baterias', 'baterias.svg')`
    )
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Papeis e Papelao', 'papeis-papelao.svg')`
    )
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Residuos eletronicos', 'eletronicos.svg')`
    )
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Residuos organicos', 'organicos.svg')`
    )
    await queryRunner.query(
      `INSERT INTO items (title, image) VALUES ('Oleo de cozinha', 'oleo.svg')`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE items')
  }
}
