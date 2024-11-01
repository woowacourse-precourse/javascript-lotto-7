import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../models/Lotto.js';
import { calculateLottoStatistics } from '../utils/calculateLottoStatistics.js';
import {
  calculateProfitRate,
  calculateTotalPrize,
} from '../utils/calculateLottoPrizes.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';
import ValidateWinningNumbers from '../models/ValidateWinningNumbers.js';
import ValidateBonusNumber from '../models/ValidateBonusNumber.js';

class LottoController {
  #inputView;

  #outputView;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #validatePurchaseAmount;

  #validateWinningNumbers;

  #validateBonusNumber;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottos = [];
    this.#validatePurchaseAmount = new ValidatePurchaseAmount();
    this.#validateWinningNumbers = new ValidateWinningNumbers();
    this.#validateBonusNumber = new ValidateBonusNumber();
  }

  async play() {
    try {
      const amount = await this.#inputView.readLottoAmount();
      this.#validatePurchaseAmount.validatePurchaseAmount(amount);

      this.#lottos = this.#generateLottos(amount);
      this.#outputView.printLottos(amount, this.#lottos);

      const winningNumbersInput = await this.#inputView.readWinningNumbers();
      this.#validateWinningNumbers.validateWinningNumbersFormat(
        winningNumbersInput,
      );
      this.#winningNumbers = this.#parseWinningNumbers(winningNumbersInput);
      this.#validateWinningNumbers.validateDuplicateNumbers(
        this.#winningNumbers,
      );
      this.#winningNumbers.forEach((number) =>
        this.#validateWinningNumbers.validateNumberRange(number),
      );

      const bonusNumberInput = await this.#inputView.readBonusNumber();
      this.#bonusNumber = this.#validateBonusNumber.validateBonusNumber(
        bonusNumberInput,
        this.#winningNumbers,
      );
      const matchResults = this.#getMatchResults();
      const statistics = calculateLottoStatistics(matchResults);
      this.#outputView.printMatchResults(statistics);

      const totalPrize = calculateTotalPrize(statistics);
      const profitRate = calculateProfitRate(totalPrize, amount);
      this.#outputView.printProfitRate(profitRate);
    } catch (error) {
      Console.print(error);
    }
  }

  #parseWinningNumbers(input) {
    return input.split(',').map((number) => parseInt(number.trim(), 10));
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    return Array.from({ length: lottoCount }, () => this.#createLotto());
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  #getMatchResults() {
    return this.#lottos.map((lotto) => ({
      matchCount: lotto.countMatchingNumbers(this.#winningNumbers),
      hasBonus: lotto.containsBonusNumber(this.#bonusNumber),
    }));
  }
}

export default LottoController;
