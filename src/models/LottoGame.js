import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  #lottos = {};

  createLottos(cash) {
    const numberOfLotto = cash / 1000;
    for (let i = 0; i < numberOfLotto; i += 1) {
      const noSorted = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos[i] = new Lotto(noSorted).getNumbers();
    }
    return this.#lottos;
  }

  static getMatchNumber(curLotto, targetLotto) {
    let matchNumber = 0;
    for (let i = 0; i < curLotto.length; i += 1) {
      if (targetLotto[i] === curLotto[i]) matchNumber += 1;
    }
    return matchNumber;
  }

  static addBonusNumber(matchNumber, bonusNumber, lotto, winStatistics) {
    const haveBonus = lotto.filter(number => number === bonusNumber);
    if (matchNumber === 5 && haveBonus) {
      return {
        ...winStatistics,
        bonus: winStatistics.bonus + 1,
        5: winStatistics[5] - 1,
      };
    }
    return winStatistics;
  }

  static getAllNumberWon(lottos, targetLotto, bonusNumber) {
    const lottosNumber = Object.keys(lottos).length;
    const winStatistics = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    };
    for (let i = 0; i < lottosNumber; i += 1) {
      const curMatchNumber = this.getMatchNumber(lottos[i], targetLotto);
      winStatistics[curMatchNumber] += 1;
      this.addBonusNumber(
        curMatchNumber,
        bonusNumber,
        lottos[i],
        winStatistics,
      );
    }
    return winStatistics;
  }

  static getGetCash(winStatistics) {
    let curCash = 0;
    curCash += winStatistics[3] * 5000;
    curCash += winStatistics[4] * 50000;
    curCash += winStatistics[5] * 1500000;
    curCash += winStatistics.bonus * 30000000;
    curCash += winStatistics[6] * 2000000000;
    return curCash;
  }

  static getRateOfReturn(buyCash, getCash) {
    if (getCash === 0) return 0;
    const rateOfReturn = ((getCash / buyCash) * 100).toFixed(1);
    return rateOfReturn;
  }
}
export default LottoGame;
