//server.js에서 사용하는 코드
//⭐️ http 계층만 담당

import { studyService } from '../services/study.service';
import { BaseController } from './base.controller';
import { studySchema } from './study.dto';

export class studyController extends BaseController {
  #studyService;
  constructor({ studyService }) {
    super();
    this.#studyService = studyService;
  }

  routes(){
    console.log("⭐️ 3️⃣ studyController ⭐️");
    //this.router.get("/",validate("query",studySchema),(req,res)=>this.getStudyList())
  }

}
