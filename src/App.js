import validatePurchaseAmount from './validation/validateAmount.js';
import validateLottotNumbers from './validation/validateLottoNumbers.js';

class App {
  async run() {
    await validatePurchaseAmount();
    await validateLottotNumbers();
  }
}

export default App;
