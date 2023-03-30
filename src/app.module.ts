import { Module } from '@nestjs/common'
import { dbConfig } from './dbConfig'
import { NoticiasModule } from './noticias/noticias.module'

@Module({
  imports: [dbConfig, NoticiasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
