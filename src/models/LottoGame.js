import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import constants from '../constants/constants.js';

const { LOTTO } = constants;

class LottoGame {
  #lottos = {};

  createLottos(cash) {
    const numberOfLotto = cash / LOTTO.PRICE;
    for (let i = 0; i < numberOfLotto; i += 1) {
      const noSorted = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER.MIN,
        LOTTO.NUMBER.MAX,
        LOTTO.NUMBER.LENGTH,
      );
      this.#lottos[i] = new Lotto(noSorted).getNumbers();
    }
    return this.#lottos;
  }

  static getMatchNumber(curLotto, targetLotto) {
    return curLotto.filter(number => targetLotto.includes(number)).length;
  }

  static addBonusNumber(matchNumber, bonusNumber, lotto, winStatistics) {
    const haveBonus = lotto.filter(number => number === bonusNumber);
    if (matchNumber === LOTTO.NUMBER.FIVE_MATCH && haveBonus) {
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
    curCash += winStatistics[3] * LOTTO.PRIZE.THREE;
    curCash += winStatistics[4] * LOTTO.PRIZE.FOUR;
    curCash += winStatistics[5] * LOTTO.PRIZE.FIVE;
    curCash += winStatistics.bonus * LOTTO.PRIZE.BONUS;
    curCash += winStatistics[6] * LOTTO.PRIZE.SIX;
    return curCash;
  }

  static getRateOfReturn(buyCash, getCash) {
    if (getCash === 0) return 0;
    const rateOfReturn = ((getCash / buyCash) * 100).toFixed(1);
    return rateOfReturn;
  }
}

export default LottoGame;
