import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log('Env user: ' + process.env.USER)

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('SUI APIs example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('SUI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  

  await app.listen(3000);
}
bootstrap();
