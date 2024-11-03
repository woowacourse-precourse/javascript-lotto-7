import Lotto from '../Lotto/Lotto.js';
import { readLineAsync } from '../Util/console.js';
import { INPUT_MESSAGES } from '../Constant/inPutMessages.js';
import { LOTTO_PRICE_VALIDATION } from '../Validator/lottoPriceValidation.js';
import LottoIssuance from '../LottoIssuance/lottoIssuance.js';
import { BONUS_NUMBER_VALIDATION } from '../Validator/bonusNumberValidation.js';

class LottoGame {
  async start() {
    const LOTTO_PRICE = await readLineAsync(INPUT_MESSAGES.buyLottoPrice);
    LOTTO_PRICE_VALIDATION(LOTTO_PRICE);

    const lottoIssuance = new LottoIssuance(LOTTO_PRICE);
    lottoIssuance.printLottoBuyMessage();
    lottoIssuance.printLottoNumber();
    const WINNING_NUMBER = await readLineAsync(INPUT_MESSAGES.winningNumber);
    const lotto = new Lotto(WINNING_NUMBER);

    const BONUS_NUMBER = await readLineAsync(INPUT_MESSAGES.bonusNumber);
    BONUS_NUMBER_VALIDATION(BONUS_NUMBER, WINNING_NUMBER);
    c;
  }
}
export default LottoGame;
