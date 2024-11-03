import LottoValidator from './controllers/LottoValidator.js';
import PurchaseValidator from './controllers/PurchaseValidator.js';
import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGES,
  LOTTO_REWARD,
  GAME_SETTINGS,
  RANK_KEYS,
} from './utils/constants.js';
import LottoMatcher from './controllers/LottoMatcher.js';
import LottoIssuer from './controllers/LottoIssuer.js';
import ProfitCalculator from './controllers/ProfitCalculator.js';

class App {
  async run() {
    // TODO: 보너스 번호 매치가 안되는 버그
    const purchaseAmount = await this.#getValidPurchaseAmount();
    const lottoTickets = LottoIssuer.createLottoTickets(purchaseAmount);

    const winningNumbers = await this.#getValidWinningNumbers();

    const bonusNumber = await this.#getValidBonusNumber(winningNumbers);

    const rankCounts = new LottoMatcher(
      lottoTickets,
      winningNumbers,
      bonusNumber
    ).run();

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
