import { readLineAsync } from '../Util/console.js';
import { INPUT_MESSAGES } from '../Constant/inPutMessages.js';
class LottoGame {
  async start() {
    const LOTTO_PRICE = readLineAsync(INPUT_MESSAGES.buyLottoPrice);
  }
}
export default LottoGame;
