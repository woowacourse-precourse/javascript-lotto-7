import Analyzer from './model/Analyzer.js';
import BonusNumber from './model/BonusNumber.js';
import PurcahseAmount from './model/PurchaseAmount.js';
import LottoStore from './model/Store.js';
import WinningNumbers from './model/WinningNumbers.js';

class LottoService {

  static createPurchase (input) {
    return new PurcahseAmount(input);
  }

  static createWinnningNumber (input) {
    return new WinningNumbers(input);
  }

  static createBonusNumber (input, winningNumbers) {
    return new BonusNumber(input, winningNumbers);
  }

  static buyTickets (purchase) {
    return LottoStore.sell(purchase);
  }

  static analyze (purchaseAmount, winningNumbers, lottos) {
    return Analyzer.analyze(purchaseAmount, winningNumbers, lottos);
  }
}

export default LottoService;
