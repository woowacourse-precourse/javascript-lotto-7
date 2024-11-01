import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from './utils/getUserInput.js';
import {
  toPurchaseAmountNumber,
  parseWinningNumbers,
  parseBonusNumber,
} from './utils/parseUserInput.js';
import validatePurchaseAmount from './validation/validateAmount.js';
import {
  validateWinningNumbers,
  validateBonusNumber,
} from './validation/validateLottoNumbers.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const amout = await getPurchaseAmount();
    validatePurchaseAmount(amout);
    const purchaseAmount = toPurchaseAmountNumber(amout);

    const winningNumbers = await getWinningNumbers();
    validateWinningNumbers(winningNumbers);
    const winningNumbersArray = parseWinningNumbers(winningNumbers);

    const bonusNumber = await getBonusNumber();
    validateBonusNumber(winningNumbersArray, bonusNumber);
    const toBonusNumber = parseBonusNumber(bonusNumber);
  }
}

export default App;
