import { config } from '#config';
import { prisma } from '#db/prisma.js';
import { App } from './app.js';
import { setupGracefulShutdown } from './common/lifecycle/graceful-shutdown.js';
import { studyController } from './controllers/study.controller.js';
import { studyProvider } from './providers/study.provider.js';
import { studyRepository } from './repositories/study.repository.js';
import { studyService } from './services/study.service.js';

async function bootstrap() {
  console.log('--- 시스템 조립 시작 ---');
  const studyprovider = new studyProvider();
  const studyrepository = new studyRepository({ prisma });
  const studyservice = new studyService({ studyprovider, studyrepository });
  const studycontroller = new studyController({ authService });

  const app = new App(studycontroller);
  const server = app.listen(config.PORT);

  setupGracefulShutdown(server, prisma);
}

bootstrap();
