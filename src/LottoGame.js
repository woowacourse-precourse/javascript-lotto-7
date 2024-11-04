import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { MESSAGES, ERROR_MESSAGES } from './Message.js';

class LottoGame {
  static PRICE_PER_LOTTO = 1000;
  static RANK_INFO = {
    FIRST: {
      prize: 2000000000,
      matchCount: 6,
    },
    SECOND: {
      prize: 30000000,
      matchCount: 5,
      needsBonus: true,
    },
    THIRD: {
      prize: 1500000,
      matchCount: 5,
      needsBonus: false,
    },
    FOURTH: {
      prize: 50000,
      matchCount: 4,
    },
    FIFTH: {
      prize: 5000,
      matchCount: 3,
    },
  };

  constructor(quantity) {
    this.quantity = quantity;
    this.lottos = this.#createLottos();
    this.winningNumbers = null;
    this.bonusNumber = null;
    this.result = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  #createLottos() {
    return Array.from(
      { length: this.quantity },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  async start() {
    this.displayLottos();
    await this.inputWinningInfo();
    this.calculateWinningResults();
    this.displayResult();
  }

  displayLottos() {
    Console.print(MESSAGES.PURCHASE_COUNT(this.quantity));
    this.lottos.forEach((lotto) =>
      Console.print(MESSAGES.LOTTO_NUMBERS(lotto.numbers))
    );
  }

  async inputWinningInfo() {
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
  }

  async inputWinningNumbers() {
    const winningInput = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS
    );
    this.winningNumbers = winningInput
      .split(',')
      .map((numberString) => Number(numberString.trim()));

    this.validateWinningNumbers(this.winningNumbers);
  }

  async inputBonusNumber() {
    const bonusInput = await Console.readLineAsync(MESSAGES.INPUT_BONUS_NUMBER);
    this.bonusNumber = Number(bonusInput);

    this.validateBonusNumber(this.bonusNumber);
  }

  validateWinningNumbers(winningNumbers) {
    if (new Set(winningNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS);
    }

    winningNumbers.forEach((number) => {
      if (isNaN(number))
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
      if (number <= 0 || number >= 46)
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    });
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber))
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);

    if (this.winningNumbers.includes(bonusNumber))
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  }

  calculateWinningResults() {
    this.lottos.forEach((lotto) => {
      const result = lotto.checkWinningStatus(
        this.winningNumbers,
        this.bonusNumber
      );
      this.recordResult(result);
    });
  }

  recordResult({ matchCount, hasBonus }) {
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LottoGame.RANK_INFO;

    if (matchCount === FIFTH.matchCount) this.result.FIFTH++;
    if (matchCount === FOURTH.matchCount) this.result.FOURTH++;
    if (matchCount === THIRD.matchCount && hasBonus === THIRD.needsBonus)
      this.result.THIRD++;
    if (matchCount === SECOND.matchCount && hasBonus === SECOND.needsBonus)
      this.result.SECOND++;
    if (matchCount === FIRST.matchCount) this.result.FIRST++;
  }

  displayResult() {
    Console.print(MESSAGES.WINNING_STATISTICS);
    Console.print(MESSAGES.DIVIDER);
    Console.print(MESSAGES.FIFTH_PRIZE(this.result.FIFTH));
    Console.print(MESSAGES.FOURTH_PRIZE(this.result.FOURTH));
    Console.print(MESSAGES.THIRD_PRIZE(this.result.THIRD));
    Console.print(MESSAGES.SECOND_PRIZE(this.result.SECOND));
    Console.print(MESSAGES.FIRST_PRIZE(this.result.FIRST));
    Console.print(MESSAGES.PROFIT_RATE(this.calculateProfitRate()));
  }

  calculateProfitRate() {
    const winningAmount = this.calculateWinningAmount();
    const purchaseAmount = this.quantity * LottoGame.PRICE_PER_LOTTO;

    return Number(((winningAmount / purchaseAmount) * 100).toFixed(1));
  }

  calculateWinningAmount() {
    return Object.entries(LottoGame.RANK_INFO).reduce((total, [rank, info]) => {
      return total + this.result[rank] * info.prize;
    }, 0);
  }
}

export default LottoGame;
