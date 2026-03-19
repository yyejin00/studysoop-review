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