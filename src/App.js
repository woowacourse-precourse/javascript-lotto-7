import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from './utils/getUserInput.js';
import {
  toPurchaseAmountNumber,
  parseWinningNumbersWithBonus,
} from './utils/parseUserInput.js';
import validatePurchaseAmount from './validation/validateAmount.js';
import {
  validateWinningNumbers,
  validateBonusNumber,
} from './validation/validateLottoNumbers.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 입력값 받고
    const amout = await getPurchaseAmount();
    validatePurchaseAmount(amout);
    const purchaseAmount = toPurchaseAmountNumber(amout);

    const winningNumbers = await getWinningNumbers();
    validateWinningNumbers(winningNumbers);

    const bonusNumber = await getBonusNumber();
    validateBonusNumber(bonusNumber);
    // TODO: 리턴값이 없다.
    // validate는 검증만하게 get으로 역할 분할하자.
    const winningNumberArray = parseWinningNumbersWithBonus(
      winningNumbers,
      bonusNumber
    );

    Console.print(purchaseAmount);
    Console.print(winningNumberArray);
  }
}

export default App;
