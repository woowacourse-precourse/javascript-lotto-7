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
    const haveBonus = lotto.includes(bonusNumber);
    if (matchNumber === LOTTO.NUMBER.FIVE_MATCH && haveBonus) {
      return {
        ...winStatistics,
        bonus: winStatistics.bonus + 1,
        5: winStatistics[5] - 1,
      };
    }
    return winStatistics;
  }

  static #initializeStatistics() {
    const MATCH_COUNTS = [0, 1, 2, 3, 4, 5, 6];
    return {
      ...MATCH_COUNTS.reduce((acc, n) => ({ ...acc, [n]: 0 }), {}),
      bonus: 0,
    };
  }

  static #updateStatistics(stats, lotto, targetLotto, bonusNumber) {
    const matchCount = this.getMatchNumber(lotto, targetLotto);
    const updatedStats = { ...stats, [matchCount]: stats[matchCount] + 1 };
    return this.addBonusNumber(matchCount, bonusNumber, lotto, updatedStats);
  }

  static getAllNumberWon(lottos, targetLotto, bonusNumber) {
    return Object.values(lottos).reduce(
      (stats, lotto) =>
        this.#updateStatistics(stats, lotto, targetLotto, bonusNumber),
      this.#initializeStatistics(),
    );
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
