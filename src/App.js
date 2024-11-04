import LottoModel from './model/LottoModel.js';
import LottoView from './view/LottoView.js';
import LottoController from './controller/LottoController.js';

class App {
  async run() {
    const lottoView = new LottoView();
    const lottoModel = new LottoModel();

    const lottoController = new LottoController(lottoView, lottoModel);
    lottoController.run();
  }
}

export default App;
