import LottoController from './controllers/LottoController.js';
import PurchaseController from './controllers/PurchaseController.js';

class App {
  async run() {
    const purchaseController = new PurchaseController();
    const amount = await purchaseController.getValidatedPurchaseAmount();

    const lottoController = new LottoController();
    lottoController.generateLottos(amount);

    const lottos = lottoController.getLottos();
  }
}

export default App;
