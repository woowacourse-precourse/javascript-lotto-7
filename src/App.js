import INPUT from './constants/InputMessage.js';
import validatePrice from './utils/validation/validatePrice.js';
import InputRepeat from './utils/io/InputRepeat.js';
import { parseStringToNumber } from './utils/NumberUtils.js';
import LottoManager from './components/LottoManager.js';

class App {
  async run() {
    const inputs = await InputRepeat(INPUT.LOTTO_PRICE, validatePrice);

    const lottoManager = new LottoManager(parseStringToNumber(inputs));
    lottoManager.printPurchasedLotto();
    await lottoManager.inputWinningLotto();
    lottoManager.printLottoResult();
  }
}

export default App;
