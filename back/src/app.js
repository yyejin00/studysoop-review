import express from 'express';

export class App {
  constructor(controller, studyMiddleware) {
    this.app = express();
    this.middleware(studyMiddleware);
    this.routes(controller);
  }

  middleware() {
    console.log('🛠️ App: 미들웨어 설정 중...');
    this.app.use(express.json());
  }

  routes(controller) {
    console.log('🛣️ App: 라우터 설정 중...');
    this.app.use('/api', controller.routes());
  }

    listen(port) {
    return this.app.listen(port, () => {
      console.log(`[${config.NODE_ENV}] Server running at http://localhost:${port}`);
    });
  }
}
