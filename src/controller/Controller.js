import { Random } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_PRICE_UNIT,
} from '../constants/constants.js';
import { validatePurchasePrice } from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../models/Lotto.js';

class Controller {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const purchasePrice = await this.getParsedPurchasePrice();

    const lottoCount = purchasePrice / LOTTO_PRICE_UNIT;
    this.#outputView.printLottoCount(lottoCount);

    const lottos = this.getParsedLottos(lottoCount);
    this.#outputView.printLottos(lottos);
  }

  async getParsedPurchasePrice() {
    const purchasePrice = await this.#inputView.getInput(
      '구입금액을 입력해 주세요.\n'
    );

    validatePurchasePrice(purchasePrice);

    return Number(purchasePrice);
  }

  getParsedLottos(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      lottos.push(new Lotto(lottoNumbers));
    }

    return lottos;
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_NUMBER_COUNT
    ).sort((a, b) => a - b);
  }
}

export default Controller;
