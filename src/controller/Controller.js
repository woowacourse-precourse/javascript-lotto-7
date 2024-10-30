import { Random } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_PRICE_UNIT,
} from '../constants/constants.js';
import {
  validateBonusNumber,
  validatePurchasePrice,
  validateWinningNumber,
} from '../validation/validation.js';
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

    const winningLotto = await this.getParsedWinningLotto();
    const bonusNumber = await this.getParsedBonusNumber(winningLotto);

    const lottoResult = this.calculateLottoResult(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.printLottoResult(lottoResult, purchasePrice);

    const winningRateOfReturn = this.calculateLottoRateOfReturn(
      lottoResult,
      purchasePrice
    );
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

  async getParsedWinningLotto() {
    const winningNumbers = await this.#inputView.getInput(
      '당첨 번호를 입력해 주세요.\n'
    );

    const parsedWinningNumbers = winningNumbers.split(',').map((number) => {
      validateWinningNumber(number);
      return Number(number);
    });

    return new Lotto(parsedWinningNumbers);
  }

  async getParsedBonusNumber(winningLotto) {
    this.#outputView.printEmptyLine();
    const bonusNumber = await this.#inputView.getInput(
      '보너스 번호를 입력해 주세요.\n'
    );

    validateBonusNumber(bonusNumber, winningLotto);

    return Number(bonusNumber);
  }

  calculateLottoResult(lottos, winningLotto, bonusNumber) {
    const lottoResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach((lotto) => {
      const lottoRank = this.calculateLottoRank(
        lotto,
        winningLotto,
        bonusNumber
      );

      if (lottoRank) lottoResult[lottoRank] += 1;
    });

    return lottoResult;
  }

  calculateLottoRank(lotto, winningLotto, bonusNumber) {
    const winningNumberCount = lotto.numbers.filter((number) =>
      winningLotto.numbers.includes(number)
    ).length;
    const isBonusNumberCollect = lotto.numbers.includes(bonusNumber);

    if (winningNumberCount === 6) return 'first';
    if (winningNumberCount === 5 && isBonusNumberCollect) return 'second';
    if (winningNumberCount === 5) return 'third';
    if (winningNumberCount === 4) return 'fourth';
    if (winningNumberCount === 3) return 'fifth';
  }

  calculateLottoRateOfReturn(lottoResult, purchasePrice) {
    const winningAmout =
      lottoResult.first * 2000000000 +
      lottoResult.second * 30000000 +
      lottoResult.third * 1500000 +
      lottoResult.fourth * 50000 +
      lottoResult.fifth * 5000;

    return ((winningAmout / purchasePrice) * 100).toFixed(1);
  }
}

export default Controller;
