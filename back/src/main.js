
import { prisma } from './config/prisma.js';
import { App } from './app.js';
import { StudyController } from './controllers/study.controller.js';
import { StudyRepository } from './repositories/study.repository.js';
import { StudyService } from './services/study.service.js';

async function bootstrap() {
  console.log('--- 🏗️  Study 시스템 조립 시작 ---');
  const studyRepository = new StudyRepository({ prisma });
  const studyService = new StudyService({ studyRepository });
  const studyController = new StudyController({ studyService });

  const app = new App(studyController);
  app.listen(5001);
}
bootstrap();

