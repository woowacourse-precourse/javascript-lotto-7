import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoStore from './LottoStore.js';
import { validateEmptyString } from './Validator.js';
import { PRINT_MESSAGE, ERROR_MESSAGE, WINNING_NUMBERS_REGEX } from './constants.js';

class App {
  async run() {
    try {
      const payment = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_PAYMENT);
      validateEmptyString(payment, ERROR_MESSAGE.INPUT_EMPTY);
      const lottoStore = new LottoStore();
      lottoStore.buyLotto(Number(payment));
      MissionUtils.Console.print(`\n${lottoStore.getLottoCount()}${PRINT_MESSAGE.BUY_COUNT}`);
      MissionUtils.Console.print(lottoStore.printLottoList());
      const winningNumbers = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_WINNING_NUMBERS);
      this.validateWinningNumbers(winningNumbers);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  validateWinningNumbers(winningNumbers) {
    validateEmptyString(winningNumbers, ERROR_MESSAGE.INPUT_EMPTY);
    const isVaildFormat = WINNING_NUMBERS_REGEX.test(winningNumbers.trim());

    if (!isVaildFormat) {
      throw new Error(ERROR_MESSAGE.INVAILD_WINNING_NUMBERS);
    }
    const winningNumbersArr = winningNumbers.trim().split(',');
    const isOutOfRange = winningNumbersArr.every((number) => number >= 1 && number <= 45);

    if (!isOutOfRange) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS_OUT_OF_RANGE);
    }
    const winningLotto = new Lotto(winningNumbersArr);
  }
}

export default App;
