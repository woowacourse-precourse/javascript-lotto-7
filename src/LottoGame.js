import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from './constant.js';

class LottoGame {
  constructor(myLottos, winningLotto, bonusNumber) {
    this.myLottos = myLottos;
    this.winningLotto = winningLotto;
    this.bonusNumber = bonusNumber;
  }

  matchLottoNumber() {
    const winningNumber = this.winningLotto.lottoNumber;
    return this.myLottos.map((myLotto) =>
      myLotto.filter((lottoNumber) => winningNumber.includes(lottoNumber))
    );
  }
  matchLottoCount(matchNumbers) {
    return matchNumbers.map((number) => number.length);
  }

  matchBonus(myLottos, bonusNumber) {
    // 보너스 번호 일치 하는 배열
    const bonusMatches = myLottos.map((lotto) =>
      lotto.filter((number) => number === Number(bonusNumber))
    );
    return bonusMatches.map((bonus) => bonus.length === 1);
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
    const myNumbers = this.matchLottoNumber(this.myLottos);

    const bonusMatch = this.matchBonus(this.myLottos, this.bonusNumber);

    // 각 로또당 몇개 맞췄는지
    const matchCount = this.matchLottoCount(myNumbers);

    return this.matchResults(matchCount, bonusMatch);
  }

  displayResults(results) {
    for (let i = 0; i < LOTTO_PRIZE.length; i++) {
      Console.print(
        `${LOTTO_PRIZE[i].MATCH_NUMBER}개 일치 (${LOTTO_PRIZE[
          i
        ].PRIZE.toLocaleString()})원 -  ${results[i]}개`
      );
    }
  }
}

export default LottoGame;
