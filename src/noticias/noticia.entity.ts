import { Categoria } from 'src/categorias/categoria.entity'
import { Departamento } from 'src/departamentos/departamento.entity'
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

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

  @ManyToOne(() => Categoria, categoria => categoria.noticias)
  categoria: Categoria

  @ManyToOne(() => Departamento, departamento => departamento.noticias)
  departamento: Departamento
}
