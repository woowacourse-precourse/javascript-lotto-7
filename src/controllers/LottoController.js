import Lotto from './Lotto.js';
import LottoValidator from './LottoValidator.js';
import LottoIssuer from './LottoIssuer.js';
import LottoMatcher from './LottoMatcher.js';
import ProfitCalculator from './ProfitCalculator.js';

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

  calculateProfit(rankCounts, purchaseAmount) {
    return ProfitCalculator.calculateProfitRate(rankCounts, purchaseAmount);
  }
}

export default LottoControllers;
