import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateCategoriaDto } from 'src/categorias/dto/categoria.dto'
import { Repository } from 'typeorm'
import { Departamento } from './departamento.entity'
import { CreateDepartamentoDto } from './dto/departamento.dto'

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>
  ) {}

  getDepartamentos() {
    return this.departamentoRepository.find()
  }

  async getDepartamento(id: number) {
    const departamentoFound = await this.departamentoRepository.findOne({
      where: { id },
    })
    if (!departamentoFound)
      return new HttpException(
        '¡Departamento no encontrado!',
        HttpStatus.NOT_FOUND
      )

    return departamentoFound
  }

  createDepartamento(departamento: CreateDepartamentoDto) {
    // Obtenemos un esquema de la entidad Departamento
    const newDepartamento = this.departamentoRepository.create(departamento)

    // Guardamos un registro en Departamento
    return this.departamentoRepository.save(newDepartamento)
  }

  async deleteDepartamento(id: number) {
    const result = await this.departamentoRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException(
        '¡Departamento no encontrado!',
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async updateDepartamento(id: number, departamento: UpdateCategoriaDto) {
    const departamentoFound = await this.departamentoRepository.findOne({
      where: { id },
    })
    if (!departamentoFound)
      return new HttpException(
        '¡Departamento no encontrado!',
        HttpStatus.NOT_FOUND
      )

    const updateCar = Object.assign(departamentoFound, departamento)

    return this.departamentoRepository.save(updateCar)
  }
}
