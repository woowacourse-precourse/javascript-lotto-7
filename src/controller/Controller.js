import { LOTTO_PRIZE } from '../constants/lottoResults.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import {
  validateBonusNumber,
  validatePurchasePrice,
  validateWinningNumbers,
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
    const purchasePrice = await this.parseValidatePurchasePriceInput();
    const lottoCount = purchasePrice / LOTTO_CONFIG.PRICE;
    this.#outputView.displayLottoCount(lottoCount);

    const lottos = Lotto.generateMultiple(lottoCount);
    this.#outputView.displayLottos(lottos);

    const winningLotto = await this.parseValidateWinningLottoInput();
    const bonusNumber = await this.parseValidateBonusNumberInput(winningLotto);
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

  async inputHandler(message, validator, parser = Number) {
    while (true) {
      try {
        const input = await this.#inputView.promptUserInput(message);
        validator(input);

        return parser(input);
      } catch (error) {
        this.#outputView.displayErrorMessage(error.message);
      }
    }
  }

  async parseValidatePurchasePriceInput() {
    return await this.inputHandler(
      '구입금액을 입력해 주세요.\n',
      validatePurchasePrice
    );
  }

  async parseValidateWinningLottoInput() {
    return await this.inputHandler(
      '당첨 번호를 입력해 주세요.\n',
      validateWinningNumbers,
      (input) => new Lotto(input.split(',').map(Number))
    );
  }

  async parseValidateBonusNumberInput(winningLotto) {
    return await this.inputHandler(
      '보너스 번호를 입력해 주세요.\n',
      (bonusNumber) => validateBonusNumber(bonusNumber, winningLotto)
    );
  }

  calculateLottoResult(lottos, winningLotto, bonusNumber) {
    const lottoResult = { ...LOTTO_PRIZE };

    lottos.forEach((lotto) => {
      const rank = lotto.calculateRank(winningLotto, bonusNumber);
      if (rank) lottoResult[rank].count += 1;
    });

    return lottoResult;
  }

  calculateLottoRateOfReturn(lottoResult, purchasePrice) {
    const winningAmount = Object.values(lottoResult).reduce(
      (sum, { amount, count }) => sum + amount * count,
      0
    );

    return ((winningAmount / purchasePrice) * 100).toFixed(1);
  }
}

export default Controller;
