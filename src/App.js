import { getPurchasePriceInput, getWinningNumbersInput } from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';

class App {
  async run() {
    const purchasePriceInput = await getPurchasePriceInput();
    validatePurchasePrice(purchasePriceInput);
    const WinningNumbersInput = await getWinningNumbersInput();
  }
}

export default App;
