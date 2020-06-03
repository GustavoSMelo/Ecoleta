import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image: string
}
