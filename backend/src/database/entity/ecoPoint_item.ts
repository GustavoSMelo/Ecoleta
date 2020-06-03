import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
/* eslint-disable camelcase */
export class ecopoint_item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ecopoint: number

  @Column()
  item: number
}
