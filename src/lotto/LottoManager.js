import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoResultPrinter from './LottoResultPrinter.js';
import { MATCH_OPTIONS, MESSAGES, PRICE_UNIT } from '../constants.js';
import getUniqueRandomNumbers from '../utils/getUniqueRandomNumbers.js';

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
    this.#print(`\n${MESSAGES.IO.OUTPUT.PURCHASED_LOTTO_COUNT(this.#lottosCount)}`);
  }

  #getMatchedCountInLottos() {
    return this.#lottos.map((lotto) => {
      const matchedCountWithWinningNumbers = lotto.getMatchedCountWithWinningNumbers(this.#winningNumbers);
      const isMatchedWithBonusNumber = lotto.isMatchedWithBonusNumber(this.#bonusNumber);

      return { matchedCountWithWinningNumbers, isMatchedWithBonusNumber };
    });
  }

  #getMatchedCountPerMatchOption() {
    return MATCH_OPTIONS.map(({ count, isBonus, prize }) => {
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
    return Math.floor(price / PRICE_UNIT);
  }

  #getLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = getUniqueRandomNumbers();
      const lotto = new Lotto(numbers);

      return lotto;
    });
  }
}

export default LottoManager;
