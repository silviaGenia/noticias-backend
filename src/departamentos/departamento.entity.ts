import { Noticia } from 'src/noticias/noticia.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'departamentos' })
export class Departamento {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ default: '' })
  nombre: string

  @Column({ default: '' })
  abreviatura: string

  @OneToMany(() => Noticia, noticia => noticia.departamento)
  noticias: Noticia[]
}
