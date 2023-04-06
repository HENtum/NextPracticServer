"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    const serverRun = await app.listen(4000);
    serverRun
        ? console.log(`Server run on port on ${await app.getUrl()}`)
        : console.log(`Server crashed`);
}
bootstrap();
//# sourceMappingURL=main.js.map