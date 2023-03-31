import { Module } from '@nestjs/common'
import { dbConfig } from './dbConfig'
import { NoticiasModule } from './noticias/noticias.module'
import { CategoriasModule } from './categorias/categorias.module'
import { DepartamentosModule } from './departamentos/departamentos.module'

@Module({
  imports: [dbConfig, NoticiasModule, CategoriasModule, DepartamentosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
