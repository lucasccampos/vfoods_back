import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  //   );
  //   next();
  // });

  const config = new DocumentBuilder()
    .setTitle('Vfoods backend document')
    .setDescription('Vfoods API description')
    .setVersion('1.0')
    .addTag('Vfoods')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.setGlobalPrefix('api');
  app.enableCors({
    credentials: false,
    origin: '*',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
