import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'noticias' })
export class Noticia {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ default: '' })
  titulo: string

  @Column({ default: '' })
  descripcion: string

  @Column({ default: '' })
  fechaCreacion: string

  @Column({ default: '' })
  autor: string

  @Column({ default: '' })
  img: string

  @Column({ default: false })
  banner: boolean
}
