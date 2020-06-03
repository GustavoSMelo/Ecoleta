import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class EcoPoints {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  whatsapp: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  city: string

  @Column()
  uf: string
}
