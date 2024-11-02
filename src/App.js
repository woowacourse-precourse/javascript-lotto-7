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
import issueLottoTickets from './controllers/lottoDisplay.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 구입 금액 입력 및 검증
    const amout = await getPurchaseAmount();
    validatePurchaseAmount(amout);
    const purchaseAmount = toPurchaseAmountNumber(amout);

    // 로또 출력
    const lottoTickets = issueLottoTickets(purchaseAmount);

    // 당첨 번호 입력 및 검증
    const winningNumbers = await getWinningNumbers();
    validateWinningNumbers(winningNumbers);
    const winningNumbersArray = parseWinningNumbers(winningNumbers);

    // 보너스 번호 입력 및 검증
    const bonusNumber = await getBonusNumber();
    validateBonusNumber(winningNumbersArray, bonusNumber);
    const toBonusNumber = parseBonusNumber(bonusNumber);
  }
}

export default App;
