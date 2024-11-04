import LottoController from './controller/LottoController.js';

class App {
  async run() {
    const lottoGame = new LottoController();
    await lottoGame.start();
  }
}
export default App;
