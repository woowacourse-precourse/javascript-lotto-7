import { readLineAsync } from '../Util/console.js';
import { INPUT_MESSAGES } from '../Constant/inPutMessages.js';
import { LOTTO_PRICE_VALIDATION } from '../Validator/lottoPriceValidation.js';
class LottoGame {
  async start() {
    const LOTTO_PRICE = await readLineAsync(INPUT_MESSAGES.buyLottoPrice);
    LOTTO_PRICE_VALIDATION(LOTTO_PRICE);
  }
}
export default LottoGame;
