import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Vfoods backend document')
    .setDescription('Vfoods API description')
    .setVersion('1.0')
    .addTag('Vfoods')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.setGlobalPrefix('api');
  app.enableCors(); // Permite todas as origens (não recomendado para produção)
  await app.listen(3000);
}
bootstrap();
