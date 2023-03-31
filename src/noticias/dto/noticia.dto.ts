export class CreateNoticiaDto {
  titulo: string
  descripcion: string
  fechaCreacion: string
  autor: string
  img: string
  banner: boolean
}

export class UpdateNoticiaDto {
  titulo?: string
  descripcion?: string
  autor?: string
  img?: string
  banner?: boolean
}
