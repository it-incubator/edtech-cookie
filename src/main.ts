import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import * as https from 'https';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync('./ssl/private.pem'),
    cert: readFileSync('./ssl/fullchain.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors({
    origin: [
      'https://people.xxx',
      'https://cat.xxx',
      'https://ui.cat.xxx',
      'https://dog.xxx',
      'https://type1.cat.xxx:444',
    ],
    credentials: true,
  });
  app.setGlobalPrefix('api');
  await app.listen(443);
}
bootstrap();
