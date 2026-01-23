import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'http://192.168.5.53:4200',
      'https://paradise-parking-system.vercel.app',
      'https://paradise-parking-system.com'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
    
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap();