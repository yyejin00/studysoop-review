//주입한다란?
//feature-based에서는 plain object로 export하고 prisma를 파일 내부에서 직접 import했습니다.
//이 구조는 테스트 대체가 어렵고, 의존성을 외부에서 주입하기 어렵습니다.

export class studyRepository {
  #prisma;

  constructor({ prisma }) {
    this.#prisma = prisma;
  }

  getStudyList() {
    console.log('  ⭐️ 1️⃣ 🗄️ Repository: findUserById 호출됨 (DB 접근) ⭐️');
    return Promise.all([
      this.#prisma.study.findMany({
        select: {
          where: where || {},
          orderBy: orderBy || { createdAt: 'desc' },
          skip: Number.isInteger(skip) ? skip : 0, // NaN 방지
          take: Number.isInteger(take) ? take : 10, // 기본 10개
          include: {  
            emojis: true,
            _count: { select: { emojis: true } },
          },
        },
      }),
      this.#prisma.study.count({ where: where || {} }),
    ]);
  }
}
