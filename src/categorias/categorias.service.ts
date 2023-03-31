import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateCategoriaDto } from 'src/categorias/dto/categoria.dto'
import { Repository } from 'typeorm'
import { Categoria } from './categoria.entity'
import { CreateCategoriaDto } from './dto/categoria.dto'

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ) {}

  getCategorias() {
    return this.categoriaRepository.find()
  }

  async getCategoria(id: number) {
    const categoriaFound = await this.categoriaRepository.findOne({
      where: { id },
    })
    if (!categoriaFound)
      return new HttpException(
        '¡Categoria no encontrado!',
        HttpStatus.NOT_FOUND
      )

    return categoriaFound
  }

  createCategoria(categoria: CreateCategoriaDto) {
    // Obtenemos un esquema de la entidad Categoria
    const newCategoria = this.categoriaRepository.create(categoria)

    // Guardamos un registro en Categoria
    return this.categoriaRepository.save(newCategoria)
  }

  async deleteCategoria(id: number) {
    const result = await this.categoriaRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException(
        '¡Categoria no encontrado!',
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async updateCategoria(id: number, categoria: UpdateCategoriaDto) {
    const categoriaFound = await this.categoriaRepository.findOne({
      where: { id },
    })
    if (!categoriaFound)
      return new HttpException(
        '¡Categoria no encontrado!',
        HttpStatus.NOT_FOUND
      )

    const updateCar = Object.assign(categoriaFound, categoria)

    return this.categoriaRepository.save(updateCar)
  }
}
