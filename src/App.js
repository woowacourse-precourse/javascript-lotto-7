import LottoController from './controllers/LottoController.js';
import PurchaseController from './controllers/PurchaseController.js';
import ResultController from './controllers/ResultController.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const purchaseController = new PurchaseController();
    const amount = await purchaseController.getValidatedPurchaseAmount();

    const lottoController = new LottoController();
    lottoController.generateLottos(amount);

    const lottos = lottoController.getLottos();
    OutputView.printPurchasedLottos(lottos);

    const resultController = new ResultController(lottos);
    await resultController.processResults();
  }
}

export default App;
