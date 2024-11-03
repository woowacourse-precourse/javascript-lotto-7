import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../Lotto.js';
import { calculateLottoStatistics } from '../utils/calculateLottoStatistics.js';
import {
  calculateProfitRate,
  calculateTotalPrize,
} from '../utils/calculateLottoPrizes.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';
import ValidateBonusNumber from '../models/ValidateBonusNumber.js';
import { LOTTO } from '../constants/lottoConstants.js';

class LottoController {
  #inputView;

  #outputView;

  #lottos;

  #winningLotto;

  #purchaseAmount;

  #bonusNumber;

  #validatePurchaseAmount;

  #validateBonusNumber;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottos = [];
    this.#winningLotto = null;
    this.#purchaseAmount = 0;
    this.#validatePurchaseAmount = new ValidatePurchaseAmount();
    this.#validateBonusNumber = new ValidateBonusNumber();
  }

  async play() {
    try {
      await this.#handlePurchase();
      await this.#handleWinningNumbers();
      await this.#handleBonusNumber();
      await this.#showResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #handlePurchase() {
    const amount = await this.#inputView.readLottoAmount();
    this.#validatePurchaseAmount.validatePurchaseAmount(amount);
    this.#purchaseAmount = amount;
    this.#lottos = this.#generateLottos(amount);
    this.#outputView.printLottos(amount, this.#lottos);
  }

  async #handleWinningNumbers() {
    const winningNumbersInput = await this.#inputView.readWinningNumbers();
    const numbers = this.#parseWinningNumbers(winningNumbersInput);
    this.#winningLotto = new Lotto(numbers);
  }

  async #handleBonusNumber() {
    const bonusNumberInput = await this.#inputView.readBonusNumber();
    this.#bonusNumber = this.#validateBonusNumber.validateBonusNumber(
      bonusNumberInput,
      this.#winningLotto.getNumbers(),
    );
  }

  async #showResults() {
    const matchResults = this.#getMatchResults();
    const statistics = calculateLottoStatistics(matchResults);
    this.#outputView.printMatchResults(statistics);

    const totalPrize = calculateTotalPrize(statistics);
    const profitRate = calculateProfitRate(totalPrize, this.#purchaseAmount);
    this.#outputView.printProfitRate(profitRate);
  }

  #parseWinningNumbers(input) {
    return input.split(',').map((number) => parseInt(number.trim(), 10));
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / LOTTO.PRICE);
    return Array.from({ length: lottoCount }, () => this.#createLotto());
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  #getMatchResults() {
    return this.#lottos.map((lotto) => ({
      matchCount: lotto.countMatchingNumbers(this.#winningLotto.getNumbers()),
      hasBonus: lotto.containsBonusNumber(this.#bonusNumber),
    }));
  }
}

export default LottoController;
