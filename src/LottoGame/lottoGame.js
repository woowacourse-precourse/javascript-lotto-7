import { readLineAsync } from '../Util/console.js';
import { INPUT_MESSAGES } from '../Constant/inPutMessages.js';
import { LOTTO_PRICE_VALIDATION } from '../Validator/lottoPriceValidation.js';
import { WINNING_NUMBER_VALIDATION } from '../Validator/winningNumberValidation.js';
class LottoGame {
  async start() {
    const LOTTO_PRICE = await readLineAsync(INPUT_MESSAGES.buyLottoPrice);
    LOTTO_PRICE_VALIDATION(LOTTO_PRICE);
    const WINNING_NUMBER = await readLineAsync(INPUT_MESSAGES.winningNumber);
    WINNING_NUMBER_VALIDATION(WINNING_NUMBER);
  }
}
export default LottoGame;
