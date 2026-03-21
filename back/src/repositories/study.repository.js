//주입한다란?
//feature-based에서는 plain object로 export하고 prisma를 파일 내부에서 직접 import했습니다.
//이 구조는 테스트 대체가 어렵고, 의존성을 외부에서 주입하기 어렵습니다.

export class StudyRepository {
  #prisma;

  constructor({ prisma }) {
    this.#prisma = prisma;
    console.log('----✅  Repository ----');
  }

  async findAll({
    where = {},
    orderBy = { createdAt: 'desc' },
    skip = 0,
    take = 10,
  } = {}) {
    console.log('⭐️ [Repository] findManyWithCount 호출됨 (병렬 DB 접근) ⭐️');
    console.log('📌Repository]나가기');

    const [list, totalCount] = await Promise.all([
      this.#prisma.study.findMany({
        where,
        orderBy,
        skip: Number(skip) || 0,
        take: Number(take) || 10,
        select: {
          id: true,
          nickname: true,
          title: true,
          introduction: true,
          background: true,
          totalPoint: true,
          createdAt: true,

          emojis: {
            select: {
              id: true,
              type: true,
            },
          },

          _count: {
            select: { emojis: true, habits: true },
          },
        },
      }),
      this.#prisma.study.count({ where }),
    ]);

    return { list, totalCount };
  }
}
