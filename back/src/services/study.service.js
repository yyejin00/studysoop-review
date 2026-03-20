export class studyService {
  #studyRepository;
  #studyProvider;
  constructor({ studyRepository, studyProvider }) {
    this.#studyRepository = studyRepository;
    this.#studyProvider = studyProvider;
  }

  async listStudies() {
    console.log('  ⚙️ Service: listStudies 실행');
    console.log(this.#studyProvider.testfunc);
    return await this.#studyRepository.getStudyList();
  }
}
