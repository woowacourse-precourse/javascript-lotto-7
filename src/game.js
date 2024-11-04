import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, LOTTO_PRIZES, LOTTO_MATCH_TEXT } from './constant';
import WinningResult from './WinningResult';

const LOTTO_RESULTS = {
  3: new WinningResult(LOTTO_MATCH_TEXT.THREE_MATCH, LOTTO_PRIZES.THREE_MATCH),
  4: new WinningResult(LOTTO_MATCH_TEXT.FOUR_MATCH, LOTTO_PRIZES.FOUR_MATCH),
  5: new WinningResult(LOTTO_MATCH_TEXT.FIVE_MATCH, LOTTO_PRIZES.FIVE_MATCH),
  '5+bonus': new WinningResult(LOTTO_MATCH_TEXT.FIVE_MATCH_WITH_BONUS, LOTTO_PRIZES.FIVE_MATCH_WITH_BONUS),
  6: new WinningResult(LOTTO_MATCH_TEXT.SIX_MATCH, LOTTO_PRIZES.SIX_MATCH),
};

const YIELD_MULTIPLIER = 100;

class Game {
  #purchasedLottoNumbersList;
  #winningNumbers;
  #bonusNumber;

  constructor(purchasedLottos, winningLotto) {
    this.#purchasedLottoNumbersList = purchasedLottos.getLottos().map((lotto) => lotto.getNumbers());
    this.#winningNumbers = winningLotto.getWinningNumbers();
    this.#bonusNumber = winningLotto.getBonusNumber();
  }

  #getMatchCount(purchasedLottoNumbers) {
    return purchasedLottoNumbers.filter((num) => this.#winningNumbers.includes(num)).length;
  }

  #getResultKey(matchCount, purchasedLottoNumbers) {
    if (matchCount < 3) return null;
    if (matchCount === 5 && purchasedLottoNumbers.includes(this.#bonusNumber)) {
      return '5+bonus';
    }
    return matchCount.toString();
  }

  #updateWinningResultCount(key) {
    if (key) {
      LOTTO_RESULTS[key].incrementCount();
    }
  }

  #calculateResult() {
    this.#purchasedLottoNumbersList.forEach((purchasedLottoNumbers) => {
      const matchCount = this.#getMatchCount(purchasedLottoNumbers);
      const key = this.#getResultKey(matchCount, purchasedLottoNumbers);
      this.#updateWinningResultCount(key);
    });
  }

  #calculateYield() {
    const ticketCount = this.#purchasedLottoNumbersList.length;
    const totalPrize = Object.values(LOTTO_RESULTS).reduce((total, result) => total + result.totalPrize, 0);
    const yieldRatio = totalPrize / (ticketCount * LOTTO_PRICE);
    return (yieldRatio * YIELD_MULTIPLIER).toFixed(1);
  }

  #printResult() {
    Console.print('당첨 통계');
    Console.print('---');

    Object.values(LOTTO_RESULTS).forEach(({ matchText, prize, count }) => {
      Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    });

    const profitability = this.#calculateYield();
    Console.print(`총 수익률은 ${profitability}%입니다.`);
  }

  play() {
    this.#calculateResult();
    this.#printResult();
  }
}

export default Game;
