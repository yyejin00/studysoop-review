//server.js에서 사용하는 코드
//⭐️ http 계층만 담당



export class StudyController {
  #studyService;
  constructor({ studyService }) {
    this.#studyService = studyService;
    console.log('----✅ Controller ----');
  }

  async findAll(req, res) {
    console.log('⭐️Postman에서 GET 스터디 목록 요청 도착!');
    console.log('📌[controller] 나가기');
    const studies = await this.#studyService.listStudies();
    res.status(200).json(studies);
  }
}
 