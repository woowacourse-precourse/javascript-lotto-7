import Lotto from './Lotto.js';
import LottoValidator from './LottoValidator.js';
import LottoIssuer from './LottoIssuer.js';
import LottoMatcher from './LottoMatcher.js';
import ProfitCalculator from './ProfitCalculator.js';
import { LOTTO_REWARD, GAME_SETTINGS } from '../utils/constants.js';
import { Console } from '@woowacourse/mission-utils';

class LottoControllers {
  createLotto(numbers, bonusNumber) {
    LottoValidator.validateWinningNumber(numbers);
    LottoValidator.validateBonusNumber(numbers, bonusNumber);
    return new Lotto(numbers);
  }

  async issueTickets(purchaseAmount) {
    return LottoIssuer.createLottoTickets(purchaseAmount);
  }

  matchLottoTickets(lottoTickets, winningNumbers, bonusNumber) {
    return new LottoMatcher(lottoTickets, winningNumbers, bonusNumber).run();
  }

  validateWinningNumbers(numbers) {
    LottoValidator.validateWinningNumber(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    LottoValidator.validateBonusNumber(winningNumbers, bonusNumber);
  }

  displayResults(rankCounts) {
    for (const [key, value] of Object.entries(LOTTO_REWARD)) {
      Console.print(
        `${value.label} - ${rankCounts[key] || GAME_SETTINGS.ZERO}개`
      );
    }
  }

  calculateProfit(rankCounts, purchaseAmount) {
    return new ProfitCalculator(rankCounts, purchaseAmount).profitRate;
  }
}

export default LottoControllers;
