export class StudyService {
  #studyRepository;
  #studyProvider;
  constructor({ studyRepository, studyProvider }) {
    this.#studyRepository = studyRepository;
    this.#studyProvider = studyProvider;
    console.log('----✅ Service ----');
  }

  async listStudies() {
    console.log('  ⚙️ Service: listStudies 실행');
    console.log('📌[service] 나가기');
    return await this.#studyRepository.findAll();
  }
}
