import { Console, Random } from '@woowacourse/mission-utils';
import { RULE } from '../constant/rule.js';

class LottoGame {
  #lottoAmount;
  #lottos;

  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottos = [];

    this.#generateLottos();
  }

  #generateLottos() {
    for (let i = 0; i < this.#lottoAmount; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(
        RULE.LOTTO.NUMBER_MIN,
        RULE.LOTTO.NUMBER_MAX,
        RULE.LOTTO.LOTTO_SIZE,
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
      const matchingNumbers = lotto.filter((number) =>
        winningLotto.hasInNumbers(number),
      ).length;

      const isBonusNumberIncluded = lotto.includes(bonusNumber);

      Console.print(matchingNumbers);
      Console.print(isBonusNumberIncluded);
    });
  }
}

export default LottoGame;
