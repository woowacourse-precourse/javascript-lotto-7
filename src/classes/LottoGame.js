import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from '../constant.js';
import LottoMatcher from './LottoMatcher.js';

class LottoGame {
  constructor(myLottos, winningLotto, bonusNumber) {
    this.lottoMatcher = new LottoMatcher(myLottos, winningLotto, bonusNumber);
  }

  matchResults(matchCount, bonusMatch) {
    const results = Array.from({ length: 5 }).fill(0);

    for (let i = 0; i < matchCount.length; i++) {
      switch (matchCount[i]) {
        case 3:
          results[0]++;
          break;
        case 4:
          results[1]++;
          break;
        case 5:
          if (bonusMatch[i]) {
            results[3]++;
          } else {
            results[2]++;
          }
          break;
        case 6:
          results[4]++;

        default:
          break;
      }
    }

    return results;
  }

  calculateLottoPrize(purchaseAmount, results) {
    const totalPrize = results.reduce((sum, count, index) => {
      sum += count * LOTTO_PRIZE[index].PRIZE;
      return sum;
    }, 0);
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  drawLotto() {
    // 각 로또당 맞춘 번호 배열
    const myNumbers = this.lottoMatcher.matchLottoNumber(this.myLottos);

    const bonusMatch = this.lottoMatcher.matchBonus(
      this.myLottos,
      this.bonusNumber
    );

    // 각 로또당 몇개 맞췄는지
    const matchCount = this.lottoMatcher.matchLottoCount(myNumbers);

    return this.matchResults(matchCount, bonusMatch);
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
}

export default LottoGame;
