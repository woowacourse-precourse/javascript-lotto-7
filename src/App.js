import { getPurchasePriceInput, getWinningNumbersInput } from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';
import { validateWinningNumbers } from './Models/winningNumbersValidator.js';

class App {
  async run() {
    const purchasePriceInput = await getPurchasePriceInput();
    validatePurchasePrice(purchasePriceInput);
    const WinningNumbersInput = await getWinningNumbersInput();
    validateWinningNumbers(WinningNumbersInput);
  }
}

export default App;
