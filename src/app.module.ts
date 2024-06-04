import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { CorsController } from './cors.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveStaticOptions: { index: false },
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController, CorsController],
  providers: [AppService],
})
export class AppModule {}
