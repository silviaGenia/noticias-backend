import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
config()

const port = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  await app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
  })
}
bootstrap()
