import { LottoController } from './controller/LottoController.js';

class App {
  async run() {
    await LottoController.start(); // 정적 메서드 호출
  }
};

export default App;