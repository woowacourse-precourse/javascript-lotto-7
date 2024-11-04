import { BONUS_NUMBER_ERROR_MESSAGE } from '../constants/ERROR_MESSAGES.js';
import { PRIZE } from '../constants/LOTTO_CONSTANTS.js';
import Generator from '../Generator.js';
import Lotto from '../Lotto.js';
import Validator from '../Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  generator;
  lotto;
  bonusNumber;
  rankingCount = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  };

  async play() {
    await this.#getPurchaseAmountControl();
    OutputView.printTicketCount(this.generator.getLottoTickets());
    OutputView.printLottoNumbers(this.generator.generateLotto());
    await this.#getWinningNumberControl();
    await this.#getBonusNumberControl();
    this.generator.numbers.forEach((array) => {
      this.calculateRank(this.lotto.countMatchingNumbers(array), array);
    });
    OutputView.printLottoStatistics(this.rankingCount);
    OutputView.printProfitRate(this.calculateProfitRate());
  }

  calculateProfitRate() {
    const totalPrize = this.#calculateTotalPrize();
    const purchase = this.generator.getPurchaseAmount();
    return (totalPrize / purchase) * 100;
  }

  #calculateTotalPrize() {
    return (
      this.rankingCount.first * PRIZE.FIRST.PRIZE_AMOUNT +
      this.rankingCount.second * PRIZE.SECOND.PRIZE_AMOUNT +
      this.rankingCount.third * PRIZE.THIRD.PRIZE_AMOUNT +
      this.rankingCount.fourth * PRIZE.FOURTH.PRIZE_AMOUNT +
      this.rankingCount.fifth * PRIZE.FIFTH.PRIZE_AMOUNT
    );
  }

  calculateRank(matchedCount, generatedNumbers) {
    const ranks = [
      { count: PRIZE.FIRST.MATCHED_COUNT, rank: 'first' },
      { count: PRIZE.SECOND.MATCHED_COUNT, rank: 'second', bonus: true },
      { count: PRIZE.THIRD.MATCHED_COUNT, rank: 'third' },
      { count: PRIZE.FOURTH.MATCHED_COUNT, rank: 'fourth' },
      { count: PRIZE.FIFTH.MATCHED_COUNT, rank: 'fifth' }
    ];

    const isBonusMatched = generatedNumbers.includes(this.bonusNumber);

    for (const { count, rank, bonus } of ranks) {
      if (matchedCount === count && (!bonus || isBonusMatched)) {
        this.rankingCount[rank] += 1;
        return;
      }
    }
  }

  async #getPurchaseAmountControl() {
    while (!this.generator) {
      try {
        const input = await InputView.inputPurchaseAmount();
        this.generator = new Generator(input);
      } catch (e) {
        OutputView.printErrorMessage(e.message);
      }
    }
  }

  async #getWinningNumberControl() {
    while (!this.lotto) {
      try {
        const input = await InputView.inputWinningNumber();
        this.lotto = new Lotto(input);
      } catch (e) {
        OutputView.printErrorMessage(e.message);
      }
    }
  }

  async #getBonusNumberControl() {
    while (!this.bonusNumber) {
      try {
        const input = await InputView.inputBonusNumber();
        this.bonusNumber = this.#validateBonusNumber(input);
      } catch (e) {
        OutputView.printErrorMessage(e.message);
      }
    }
  }

  #validateBonusNumber(input) {
    const bonusNumber = Validator.validateBonusNumber(input);
    const isDuplicateBonusNumber =
      this.lotto.isDuplicateBonusNumber(bonusNumber);

    if (isDuplicateBonusNumber) {
      throw new Error(
        BONUS_NUMBER_ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE_WITH_WINNING_NUMBER
      );
    }

    return bonusNumber;
  }
}

export default Controller;
