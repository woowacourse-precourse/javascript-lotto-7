import Lotto from './Lotto.js';
import LottoValidator from './LottoValidator.js';
import LottoIssuer from './LottoIssuer.js';
import LottoMatcher from './LottoMatcher.js';
import ProfitCalculator from './ProfitCalculator.js';
import { LOTTO_REWARD, GAME_SETTINGS } from '../utils/constants.js';

class LottoControllers {
  createLotto(numbers, bonusNumber) {
    LottoValidator.validateWinningNumber(numbers);
    LottoValidator.validateBonusNumber(numbers, bonusNumber);
    return new Lotto(numbers);
  }

  issueTickets(purchaseAmount) {
    return LottoIssuer.issueLottoTickets(purchaseAmount);
  }

  matchLottoTickets(lottoTickets, winningNumbers, bonusNumber) {
    return LottoMatcher.assignLottoRank(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );
  }

  displayResults(rankCounts) {
    for (const [key, value] of Object.entries(LOTTO_REWARD)) {
      Console.print(
        `${value.label} - ${rankCounts[key] || GAME_SETTINGS.ZERO}개`
      );
    }
  }

  calculateProfit(rankCounts, purchaseAmount) {
    return ProfitCalculator.calculateProfitRate(rankCounts, purchaseAmount);
  }
}

export default LottoControllers;
