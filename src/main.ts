import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Origem permitida (endereço do frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true, // Permitir credenciais (cookies, cabeçalhos de autorização, etc.)
  };
  app.enableCors(corsOptions);

  await app.listen(3001);
}
bootstrap();
