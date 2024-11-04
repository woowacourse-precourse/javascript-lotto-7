import LottoController from './controllers/LottoController'

class App {
  async run() {
    const controller = new LottoController();
    await controller.run();
  }
}

export default App;
