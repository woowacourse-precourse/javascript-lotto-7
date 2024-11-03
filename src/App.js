import { MissionUtils } from '@woowacourse/mission-utils';
import LottoStore from './LottoStore.js';
import { validateEmptyString } from './Validator.js';
import { PRINT_MESSAGE, ERROR_MESSAGE } from './constants.js';

class App {
  async run() {
    try {
      const payment = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_PAYMENT);
      validateEmptyString(payment, ERROR_MESSAGE.INPUT_EMPTY);
      const lottoStore = new LottoStore();
      lottoStore.buyLotto(Number(payment));
      MissionUtils.Console.print(`\n${lottoStore.getLottoCount()}${PRINT_MESSAGE.BUY_COUNT}`);
      MissionUtils.Console.print(lottoStore.printLottoList());
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
