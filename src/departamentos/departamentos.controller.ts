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
import {
  CreateDepartamentoDto,
  UpdateDepartamentoDto,
} from './dto/departamento.dto'
import { Departamento } from './departamento.entity'
import { DepartamentosService } from './departamentos.service'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private departamentoService: DepartamentosService) {}

  @Get()
  listarDepartamentos(): Promise<Departamento[]> {
    return this.departamentoService.getDepartamentos()
  }

  @Get(':id')
  obtenerDepartamento(@Param('id', ParseIntPipe) id: number) {
    return this.departamentoService.getDepartamento(id)
  }

  @Post()
  crearDepartamento(
    @Body() newDepartamento: CreateDepartamentoDto
  ): Promise<Departamento> {
    return this.departamentoService.createDepartamento(newDepartamento)
  }

  @Delete(':id')
  eliminarDepartamento(@Param('id', ParseIntPipe) id: number) {
    return this.departamentoService.deleteDepartamento(id)
  }

  @Patch(':id')
  actualizarDepartamento(
    @Param('id', ParseIntPipe) id: number,
    @Body() departamento: UpdateDepartamentoDto
  ) {
    return this.departamentoService.updateDepartamento(id, departamento)
  }
}
