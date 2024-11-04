import LottoValidator from './validation/LottoValidator.js';
import PurchaseValidator from './validation/PurchaseValidator.js';
import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGES,
  LOTTO_REWARD,
  GAME_SETTINGS,
  RANK_KEYS,
} from './utils/constants.js';
import LottoMatcher from './services/LottoMatcher.js';
import LottoIssuer from './services/LottoIssuer.js';
import ProfitCalculator from './services/ProfitCalculator.js';

class App {
  async run() {
    const purchaseAmount = await this.#getValidPurchaseAmount();
    this.#printNewLine();

    const lottoTickets = LottoIssuer.createLottoTickets(purchaseAmount);
    this.#printNewLine();

    const winningNumbers = await this.#getValidWinningNumbers();
    this.#printNewLine();

    const bonusNumber = await this.#getValidBonusNumber(winningNumbers);
    this.#printNewLine();

    const rankCounts = new LottoMatcher(
      lottoTickets,
      winningNumbers,
      bonusNumber
    ).run();

    this.#displayResultHeader();
    this.#displayResults(rankCounts);

    const profitRate = new ProfitCalculator(rankCounts, purchaseAmount)
      .profitRate;
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async #getValidPurchaseAmount() {
    try {
      const amount = await Console.readLineAsync(MESSAGES.INPUT_AMOUT);
      return PurchaseValidator.validate(amount);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidPurchaseAmount();
    }
  }

  async #getValidWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(
        MESSAGES.INPUT_WINNING_NUMBERS
      );
      return LottoValidator.validateWinningNumber(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidWinningNumbers();
    }
  }

  async #getValidBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync(
        MESSAGES.INPUT_BONUS_NUMBER
      );
      return LottoValidator.validateBonusNumber(winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidBonusNumber(winningNumbers);
    }
  }

  #printNewLine() {
    Console.print('');
  }

  #displayResultHeader() {
    Console.print('당첨 통계');
    Console.print('---');
  }

  #displayResults(rankCounts) {
    for (const [key, value] of Object.entries(LOTTO_REWARD)) {
      if (key === RANK_KEYS.NONE) continue;
      Console.print(
        `${value.label} - ${rankCounts[key] || GAME_SETTINGS.ZERO}개`
      );
    }
  }
}

export default App;
