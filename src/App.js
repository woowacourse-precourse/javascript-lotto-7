import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoStore from './LottoStore.js';
import Validator from './Validator.js';
import { PRINT_MESSAGE } from './constants.js';

class App {
  async run() {
    try {
      const payment = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_PAYMENT);
      const lottoStore = new LottoStore();
      lottoStore.buyLotto(payment);

      MissionUtils.Console.print(`\n${lottoStore.getLottoCount()}${PRINT_MESSAGE.BUY_COUNT}`);
      MissionUtils.Console.print(lottoStore.printLottoList());

      const winningNumbers = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_WINNING_NUMBERS);
      this.validate(winningNumbers);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  validate(numbers) {
    const vaildator = new Validator();
    vaildator.winningNumbers(numbers);
    const winningNumbers = numbers.trim().split(',').map(Number);

    return new Lotto(winningNumbers);
  }
}

export default App;
