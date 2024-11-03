import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoResultPrinter from './LottoResultPrinter.js';

class LottoManager {
  #winningNumbers;

  #bonusNumber;

  #lottosCount;

  #lottos;

  #price;

  #matchedCountInLottos;

  #matchedCountPerMatchOption;

  constructor(winningNumbers, bonusNumber, price) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#price = price;

    this.#lottosCount = this.#getLottoCount(price);
    this.#lottos = this.#getLottos(this.#lottosCount);

    this.#matchedCountInLottos = this.#getMatchedCountInLottos();
    this.#matchedCountPerMatchOption = this.#getMatchedCountPerMatchOption();
  }

  printResult() {
    this.#printLottosCount();
    this.#printLottos();

    const lottoResultPrinter = new LottoResultPrinter(this.#matchedCountPerMatchOption, this.#price);
    lottoResultPrinter.printResult();
  }

  #printLottosCount() {
    this.#print(`\n${this.#lottosCount}개를 구매했습니다.`);
  }

  #getMatchedCountInLottos() {
    return this.#lottos.map((lotto) => {
      const matchedCountWithWinningNumbers = lotto.getMatchedCountWithWinningNumbers(this.#winningNumbers);
      const isMatchedWithBonusNumber = lotto.isMatchedWithBonusNumber(this.#bonusNumber);

      return { matchedCountWithWinningNumbers, isMatchedWithBonusNumber };
    });
  }

  #getMatchedCountPerMatchOption() {
    const matchOptions = [
      { count: 3, isBonus: false, prize: 5000 },
      { count: 4, isBonus: false, prize: 50_000 },
      { count: 5, isBonus: false, prize: 1_500_000 },
      { count: 5, isBonus: true, prize: 30_000_000 },
      { count: 6, isBonus: false, prize: 2_000_000_000 },
    ];

    return matchOptions.map(({ count, isBonus, prize }) => {
      const matchedCount = this.#matchedCountInLottos.filter(
        ({ matchedCountWithWinningNumbers, isMatchedWithBonusNumber }) =>
          matchedCountWithWinningNumbers === count && isMatchedWithBonusNumber === isBonus,
      ).length;

      return { count, matchedCount, isBonus, prize };
    });
  }

  #print(message) {
    Console.print(message);
  }

  #printLottos() {
    this.#lottos.forEach((lotto) => {
      this.#print(lotto.toString());
    });
  }

  #getLottoCount(price) {
    return Math.floor(price / 1000);
  }

  #getLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = this.#getUniqueRandomNumbersArray();
      const lotto = new Lotto(numbers);

      return lotto;
    });
  }

  #getUniqueRandomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoManager;
