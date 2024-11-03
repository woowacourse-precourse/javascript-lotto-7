import LottoMatcher from './LottoMatcher.js';
import LottoCalculator from './LottoCalculator.js';

class LottoGame {
  constructor(myLottos, winningLotto, bonusNumber, purchasePrice) {
    this.lottoCalculator = new LottoCalculator(purchasePrice);
    this.lottoMatcher = new LottoMatcher(
      myLottos,
      winningLotto,
      bonusNumber,
      this.lottoCalculator
    );
  }

  drawLotto() {
    return this.lottoMatcher.matchLotto();
  }
  calculateLotto() {
    return this.lottoCalculator.calculateLottoProfit();
  }
}

export default LottoGame;
