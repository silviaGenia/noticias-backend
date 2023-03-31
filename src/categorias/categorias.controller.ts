import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
} from '@nestjs/common'
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto'
import { Categoria } from './categoria.entity'
import { CategoriasService } from './categorias.service'

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriaService: CategoriasService) {}

  @Get()
  listarCategorias(): Promise<Categoria[]> {
    return this.categoriaService.getCategorias()
  }

  @Get(':id')
  obtenerCategoria(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.getCategoria(id)
  }

  @Post()
  crearCategoria(@Body() newCategoria: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaService.createCategoria(newCategoria)
  }

  @Delete(':id')
  eliminarCategoria(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.deleteCategoria(id)
  }

  @Patch(':id')
  actualizarCategoria(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoria: UpdateCategoriaDto
  ) {
    return this.categoriaService.updateCategoria(id, categoria)
  }
}
