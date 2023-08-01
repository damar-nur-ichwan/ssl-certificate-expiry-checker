import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prefix = process.env.PREFIX || 'api';
  app.setGlobalPrefix(prefix);

  const config = new DocumentBuilder()
    .setTitle('SSL Certificate Expiry Checker')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Setup the Swagger UI using the same prefix as the application
  SwaggerModule.setup(prefix, app, document);

  await app.listen(3000);
}
bootstrap();
