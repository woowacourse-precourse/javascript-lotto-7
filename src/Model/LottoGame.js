import { Console, Random } from '@woowacourse/mission-utils';
import { RULE } from '../constant/rule.js';

class LottoGame {
  #lottoAmount;
  #lottos;
  #winningResult;

  #rankMapping = {
    6: 1,
    5: { true: 2, false: 3 },
    4: 4,
    3: 5,
  };

  #winningPriceMapping = {
    0: 0,
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  };

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
      const randomNumbers = Random.pickUniqueNumbersInRange(
        RULE.lotto.minNumber,
        RULE.lotto.maxNumber,
        RULE.lotto.lottoSize,
      );

      this.#lottos.push(randomNumbers.sort((a, b) => a - b));
    }
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
    Console.print('');
  }

  calculateWinningRanks(winningLotto, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      const matchingCount = lotto.filter((number) =>
        winningLotto.hasInNumbers(number),
      ).length;

      const isBonusNumberMatched = lotto.includes(bonusNumber);

      const rank = this.#calculateRank(matchingCount, isBonusNumberMatched);
      if (rank !== 0) this.#winningResult[rank] += 1;
    });
  }

  #calculateRank(matchingCount, isBonusNumberMatched) {
    const rank = this.#rankMapping[matchingCount];

    if (rank && typeof rank === 'object') {
      return rank[isBonusNumberMatched];
    }

    return rank || 0;
  }

  calculateWinningRate() {
    const totalWinningAmount = this.#winningResult.reduce(
      (acc, result, i) => acc + result * this.#winningPriceMapping[i],
      0,
    );
    return (
      (totalWinningAmount / (this.#lottoAmount * RULE.purchaseAmountUnit)) * 100
    );
  }
}

export default LottoGame;
