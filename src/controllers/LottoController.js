import { Console } from '@woowacourse/mission-utils';
import LottoPurchase from '../models/LottoPurchase.js';
import LottoGenerator from '../utils/LottoGenerator.js';
import LottoView from '../views/LottoView.js';
import LottoInput from '../models/LottoInput.js';
import LottoResult from '../models/LottoResult.js';

class LottoController {
  async start() {
    const PRICE = await this.getPriceInput();
    const PURCHASE = new LottoPurchase(PRICE.trim());

    const LOTTO_COUNT = PURCHASE.getLottoCount();

    const LOTTO_GENERATOR = new LottoGenerator(LOTTO_COUNT);
    LOTTO_GENERATOR.generateLottoNumbers();

    const LOTTO_VIEW = new LottoView();
    LOTTO_VIEW.printLottoNumbers(LOTTO_COUNT, LOTTO_GENERATOR.lottoNumbers);

    const LOTTO_INPUT = new LottoInput();
    const WINNING_NUMBERS = await LOTTO_INPUT.getWinningNumbers();
    const BONUS_NUMBER = await LOTTO_INPUT.getBonusNumber();

    const LOTTO_RESULT = new LottoResult(
      LOTTO_GENERATOR.lottoNumbers,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    );
    LOTTO_RESULT.checkResults();

    LOTTO_VIEW.printResult(LOTTO_RESULT.getResults());
  }

  getPriceInput() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default LottoController;
