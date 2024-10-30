import {
  getPurchasePriceInput,
  getWinningNumbersInput,
  getBonusNumberInput,
} from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';
import { validateWinningNumbers } from './Models/winningNumbersValidator.js';

class App {
  async run() {
    const purchasePriceInput = await getPurchasePriceInput();
    validatePurchasePrice(purchasePriceInput);
    const winningNumbersInput = await getWinningNumbersInput();
    validateWinningNumbers(winningNumbersInput);
    const bounsNumber = await getBonusNumberInput();
  }
}

export default App;
