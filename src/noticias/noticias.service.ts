import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Noticia } from './noticia.entity'
import { CreateNoticiaDto } from './dto/noticia.dto'
import { UpdateCategoriaDto } from 'src/categorias/dto/categoria.dto'

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticia) private noticiaRepository: Repository<Noticia>
  ) {}

  getNoticias() {
    return this.noticiaRepository.find()
  }

  async getNoticia(id: number) {
    const noticiaFound = await this.noticiaRepository.findOne({
      where: { id },
    })
    if (!noticiaFound)
      return new HttpException('¡Noticia no encontrado!', HttpStatus.NOT_FOUND)

    return noticiaFound
  }

  createNoticia(noticia: CreateNoticiaDto) {
    // Obtenemos un esquema de la entidad Noticia
    const newNoticia = this.noticiaRepository.create(noticia)

    // Guardamos un registro en Noticia
    return this.noticiaRepository.save(newNoticia)
  }

  async deleteNoticia(id: number) {
    const result = await this.noticiaRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException('¡Noticia no encontrado!', HttpStatus.NOT_FOUND)
    }

    return result
  }

  async updateNoticia(id: number, noticia: UpdateCategoriaDto) {
    const noticiaFound = await this.noticiaRepository.findOne({
      where: { id },
    })
    if (!noticiaFound)
      return new HttpException('¡Noticia no encontrado!', HttpStatus.NOT_FOUND)

    const updateCar = Object.assign(noticiaFound, noticia)

    return this.noticiaRepository.save(updateCar)
  }
}
