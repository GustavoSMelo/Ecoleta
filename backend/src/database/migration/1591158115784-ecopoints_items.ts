import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ecopointsItems1591158115784 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE ecopoint_item (
      id INT,
      ecopoint INT,
      item INT,
      PRIMARY KEY (id),
      FOREIGN KEY (ecopoint) REFERENCES eco_points(id),
      FOREIGN KEY (item) REFERENCES items(id)
    )charset=utf8 engine=innoDB`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS ecopoint_item')
  }
}
