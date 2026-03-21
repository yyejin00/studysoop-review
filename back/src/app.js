// import express from 'express';

// export class App {
//   constructor(controller, studyMiddleware) {
//     this.app = express();
//     this.middleware(studyMiddleware);
//     this.routes(controller);
//   }

//   middleware() {
//     console.log('🛠️ App: 미들웨어 설정 중...');
//     this.app.use(express.json());
//   }

//   routes(controller) {
//     console.log('🛣️ App: 라우터 설정 중...');
//     this.app.use('/api', controller.routes());
//   }

//     listen(port) {
//     return this.app.listen(port, () => {
//       console.log(`[${config.NODE_ENV}] Server running at http://localhost:${port}`);
//     });
//   }
// }
import express from 'express';
export class App {
  constructor(studyController) {
    this.app = express();
    this.app.use(express.json());
    // 라우터 연결
    this.app.get('/api/studies', (req, res) =>
      studyController.findAll(req, res),
    );
    console.log('---⭐️ App 설정 완료---');
  }
  listen(port) {
    return this.app.listen(port, () => console.log(`서버시작: ${port}`));
  }
  
}
