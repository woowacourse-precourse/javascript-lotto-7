import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from '../constant.js';
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

  displayResults(results) {
    for (let i = 0; i < LOTTO_PRIZE.length; i++) {
      const outputCountString = `${LOTTO_PRIZE[i].MATCH_NUMBER}개 일치`;
      const outputBonusString = ', 보너스 볼 일치';
      const outputPrizeString = ` (${LOTTO_PRIZE[
        i
      ].PRIZE.toLocaleString()}원) - ${results[i]}개`;

      if (i === 3) {
        Console.print(
          outputCountString + outputBonusString + outputPrizeString
        );
      } else {
        Console.print(outputCountString + outputPrizeString);
      }
    }
  }
  drawLotto() {
    const lottoResults = this.lottoMatcher.matchLotto();

    this.displayResults(lottoResults);
    this.lottoCalculator.calculateLotto();
  }
}

export default LottoGame;
