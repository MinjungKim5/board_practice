import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const corsOptions: CorsOptions = {
  //   origin: 'http://localhost',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: true,
  //   optionsSuccessStatus: 204,
  // };
  app.enableCors();
  await app.listen(5555);
}
bootstrap();
