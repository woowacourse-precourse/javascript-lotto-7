import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER } from './shared/index.js';

class LottoMachine {
  static generateLottos(count) {
    return Array.from({ length: count }, () =>
      LottoMachine.#pickRandomNumbers()
    );
  }

  static getTotalCount(lottos, winningLotto, bonusNumber) {
    const results = this.#generateResults(lottos, winningLotto, bonusNumber);
    return this.#setTotalCount(results);
  }

  static #generateResults(lottos, winningLotto, bonusNumber) {
    return lottos
      .map((lotto) => this.#getMatchCount(winningLotto, lotto, bonusNumber))
      .filter(
        ({ matchCount, hasBonus }) => matchCount >= NUMBER.MATCH_MINIMUM_COUNT
      );
  }

  static #setTotalCount(results) {
    const totalCounts = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      ['bonus', 0],
    ]);

    results.forEach(({ matchCount, hasBonus }) => {
      if (hasBonus && matchCount === 5) {
        totalCounts.set('bonus', (totalCounts.get(matchCount) ?? 0) + 1);
      } else
        totalCounts.set(matchCount, (totalCounts.get(matchCount) ?? 0) + 1);
    });

    return totalCounts;
  }

  static #getMatchCount(winningLotto, lotto, bonusNumber) {
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
