import { Random } from '@woowacourse/mission-utils';
import { RULE } from '../constant/rule.js';
import Lotto from './Lotto.js';

class LottoGame {
  #lottoAmount;
  #lottos;
  #winningResult;

  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottos = [];
    this.#winningResult = Array(6).fill(0);

    this.#generateLottos();
  }

  getLottoAmount() {
    return this.#lottoAmount;
  }

  getWinningResult(rank) {
    return this.#winningResult[rank];
  }

  #generateLottos() {
    for (let i = 0; i < this.#lottoAmount; i++) {
      const sortedRandomNumbers = Random.pickUniqueNumbersInRange(
        RULE.lotto.minNumber,
        RULE.lotto.maxNumber,
        RULE.lotto.lottoSize,
      ).sort((a, b) => a - b);

      this.#lottos.push(new Lotto(sortedRandomNumbers));
    }
  }

  getLottosForPrint() {
    return this.#lottos.map((lotto) => `[${lotto.getLottoForPrint()}]`);
  }

  calculateWinningRanks(winningLotto, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      const matchingCount = lotto.countMatchingNumbers(winningLotto);

      const isBonusNumberMatched = lotto.hasInNumbers(bonusNumber);

      const rank = this.#calculateRank(matchingCount, isBonusNumberMatched);
      if (rank !== 0) this.#winningResult[rank] += 1;
    });
  }

  #calculateRank(matchingCount, isBonusNumberMatched) {
    const rank = RULE.lotto.rankRules[matchingCount];

    if (rank && typeof rank === 'object') {
      return rank[isBonusNumberMatched];
    }

    return rank || 0;
  }

  calculateWinningRate() {
    const totalWinningAmount = this.#winningResult.reduce(
      (acc, result, i) => acc + result * RULE.lotto.prizeAmounts[i],
      0,
    );
    return (
      (totalWinningAmount / (this.#lottoAmount * RULE.purchaseAmount.unit)) *
      100
    );
  }
}

export default LottoGame;
