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
    this.#outputView.displayLottoCount(lottoCount);

    const lottos = this.getParsedLottos(lottoCount);
    this.#outputView.displayLottos(lottos);

    const winningLotto = await this.getParsedWinningLotto();
    const bonusNumber = await this.getParsedBonusNumber(winningLotto);

    const lottoResult = this.calculateLottoResult(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.displayLottoResult(lottoResult, purchasePrice);

    const winningRateOfReturn = this.calculateLottoRateOfReturn(
      lottoResult,
      purchasePrice
    );
    this.#outputView.displayLottoRateOfReturn(winningRateOfReturn);
  }

  async getParsedPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await this.#inputView.promptUserInput(
          '구입금액을 입력해 주세요.\n'
        );

        validatePurchasePrice(purchasePrice);

        return Number(purchasePrice);
      } catch (error) {
        this.#outputView.displayErrorMessage(error.message);
      }
    }
  }

  getParsedLottos(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lotto = Lotto.generate();
      lottos.push(lotto);
    }

    return lottos;
  }

  async getParsedWinningLotto() {
    while (true) {
      try {
        const winningNumbers = await this.#inputView.promptUserInput(
          '당첨 번호를 입력해 주세요.\n'
        );

        const parsedWinningNumbers = winningNumbers.split(',').map((number) => {
          validateWinningNumber(number);
          return Number(number);
        });

        return new Lotto(parsedWinningNumbers);
      } catch (error) {
        this.#outputView.displayErrorMessage(error.message);
      }
    }
  }

  async getParsedBonusNumber(winningLotto) {
    while (true) {
      try {
        this.#outputView.displayEmptyLine();
        const bonusNumber = await this.#inputView.promptUserInput(
          '보너스 번호를 입력해 주세요.\n'
        );

        validateBonusNumber(bonusNumber, winningLotto);

        return Number(bonusNumber);
      } catch (error) {
        this.#outputView.displayErrorMessage(error.message);
      }
    }
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
      const rank = lotto.calculateRank(winningLotto, bonusNumber);
      if (rank) lottoResult[rank] += 1;
    });

    return lottoResult;
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
