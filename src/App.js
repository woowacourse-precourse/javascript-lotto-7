import View from './view/view.js';
import io from './utils/io.js';
import LottoController from './lotto.controller.js';
import LottoService from './lotto.service.js';
class App {

  async run () {
    const lottoController = new LottoController(new View(io), LottoService);
    await lottoController.run();
  }
}

export default App;
