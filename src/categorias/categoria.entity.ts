import { Noticia } from 'src/noticias/noticia.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'categorias' })
export class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ default: '' })
  nombre: string

  @Column({ default: '' })
  abreviatura: string

  @OneToMany(() => Noticia, noticia => noticia.categoria)
  noticias: Noticia[]
}
