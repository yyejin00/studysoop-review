## 백엔드 마이그레이션
- 마이그레이션 이전 : `route`,`schema`,`server`,`repository` 파일로 관리.
- 마이그레이션 이후 : `controller`, `service`, `repository`, `provider` 파일로 관리.

| OOP 교재 개념 | 이전 학습 맥락 | 이번 코드에서의 구현 위치 |
| --- | --- | --- |
| 추상화 | 문제에 필요한 정보만 노출 | Controller는 HTTP 입출력만, Service는 도메인 규칙만 담당 |
| 캡슐화 | `#private`로 내부 상태 보호 | `#userRepository`, `#tokenProvider` 등 의존성 은닉 |
| 상속 | 공통 기능을 부모에 모으고 자식이 재사용 | `BaseController`를 공통 부모로 사용 |
| 다형성 | 동일한 호출, 다른 구현 | `routes()` 오버라이딩 |
| 단순 팩토리/전략 | 생성/행동을 외부로 분리 | DI 컨테이너에서 객체 생성과 조합을 일괄 관리 |


### 마이그레이션으로 기능 분리 

| 구분 | `feature-based` | `layered-architecture` |
| --- | --- | --- |
| 진입 구조 | `server.js` 중심 | `main.js` + `App` + `Controller` |
| 인증 처리 | `auth.routes.js` 내부 혼재 | `AuthController` + `AuthService` + `AuthMiddleware` |
| 비밀번호/JWT/쿠키 | `utils` 함수 집합 | `providers` 클래스 집합 |
| DB 접근 | plain object repository | 클래스 repository + 생성자 주입 |
| 의존성 조립 | 파일 내부 import + 직접 생성 | Awilix 컨테이너 조립 |

## feature-based vs Layered
#### Feature-based: server.js (모든 것이 하나에 섞임)
```js

import express from 'express';
import router from './routes/index.js'; // 직접 참조 (강한 결합)

const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ message: 'OK' })); // 로직 혼재
app.use('/', router);
app.listen(5001); // 직접 실행 (제어권 가짐)
```

####  Layered: App class (전달받은 부품을 조립만 함)
```js

export class App {
  constructor(controller, authMiddleware) { // ⭐️ 의존성 주입 (IoC/DI)
    this.app = express();
    this.middleware(authMiddleware);
    this.routes(controller);
  }

  routes(controller) {
    // ⭐️ 다형성: 어떤 컨트롤러든 routes()만 있으면 작동함
    this.app.use("/api", controller.routes()); 
  }

  listen(port) { // 실행은 명령을 받을 때만 수행
    return this.app.listen(port);
  }
}
```