import express from 'express';
export class BaseController {
  constructor() {
    this.router = express.Router();
  }
  routes() {
    console.log("========================================");
    console.log(" 🚦 3️⃣ Controller: baseController 요청 들어옴");
    throw new Error('Method not implemented.');
  }
}
