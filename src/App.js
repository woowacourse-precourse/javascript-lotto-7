import LottoController from './components/LottoController.js';
import purchaseAmountValidator from './validation/purchaseAmountValidator.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.promptPurchaseAmount();
    purchaseAmountValidator(lottoController.getPurchaseAmount());
  }
}

export default App;
