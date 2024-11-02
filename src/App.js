import LottoGameController from './controller/LottoGameController.js';

class App {
  constructor() {
    this.LottoGameController = new LottoGameController();  
  }
  async run() {
    await this.LottoGameController.startGame(); 
  }
}

export default App;
