import { Controller, Get } from '@nestjs/common'
import { Noticia } from './noticia.entity'
import { NoticiasService } from './noticias.service'

@Controller('noticias')
export class NoticiasController {
  constructor(private noticiaService: NoticiasService) {}

  @Get()
  listarNoticias(): Promise<Noticia[]> {
    return this.noticiaService.getNoticias()
  }
}
