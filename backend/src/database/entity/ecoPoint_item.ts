import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()

export class ecopoint_item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ecopoint: number

  @Column()
  item: number
}
