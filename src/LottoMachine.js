import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER } from './shared/index.js';

class LottoMachine {
  static MATCH_INDICES = Object.freeze({
    3: 0,
    4: 1,
    5: 2,
    6: 3,
    bonus: 4,
  });

  static generateLottos(count) {
    return Array.from({ length: count }, () =>
      LottoMachine.#pickRandomNumbers()
    );
  }

  static getMatchCounts(lottos, winningLotto, bonusNumber) {
    const results = this.#generateMatchCounts(
      lottos,
      winningLotto,
      bonusNumber
    );
    return this.#aggregateMatchCounts(results);
  }

  static getProfitRate(totalCounts, purchasePrice) {
    const totalPrice = this.#getTotalPrice(totalCounts);
    const profitRate = (totalPrice / purchasePrice) * 100;

    return profitRate.toFixed(1);
  }

  static #getTotalPrice(totalCounts) {
    return [...totalCounts.values()].reduce(
      (acc, cur, index) => acc + cur * NUMBER.PRICE_LIST[index],
      0
    );
  }

  static #generateMatchCounts(lottos, winningLotto, bonusNumber) {
    return lottos
      .map((lotto) => this.#createMatchObject(winningLotto, lotto, bonusNumber))
      .filter(({ matchCount, _ }) => matchCount >= NUMBER.MATCH_MINIMUM_COUNT);
  }

  static #aggregateMatchCounts(results) {
    const totalCounts = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      ['bonus', 0],
    ]);

    this.#setMatchResults(results, totalCounts);

    return totalCounts;
  }

  static #setMatchResults(results, totalCounts) {
    results.forEach(({ matchCount, hasBonus }) => {
      if (hasBonus && matchCount === 5) {
        totalCounts.set('bonus', (totalCounts.get(matchCount) ?? 0) + 1);
      } else
        totalCounts.set(matchCount, (totalCounts.get(matchCount) ?? 0) + 1);
    });
  }

  static #createMatchObject(winningLotto, lotto, bonusNumber) {
    const matchCount = lotto.filter((number) =>
      winningLotto.includes(number)
    ).length;
    const hasBonus = lotto.includes(bonusNumber);

    return { matchCount, hasBonus };
  }

  static #pickRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.MIN,
      NUMBER.MAX,
      NUMBER.VALID_LENGTH
    );
  }
}

export default LottoMachine;
