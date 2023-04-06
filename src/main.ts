import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const serverRun = await app.listen(4000);
  serverRun
    ? console.log(`Server run on port on ${await app.getUrl()}`)
    : console.log(`Server crashed`);
}
bootstrap();
