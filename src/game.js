import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, LOTTO_PRIZES, LOTTO_MATCH_TEXT } from './constant';

class LottoResult {
  constructor(matchText, prize) {
    this.matchText = matchText;
    this.prize = prize;
    this.count = 0;
  }

  incrementCount() {
    this.count += 1;
  }

  getTotalPrize() {
    return this.count * this.prize;
  }
}
const LOTTO_RESULTS = {
  3: new LottoResult(LOTTO_MATCH_TEXT.THREE_MATCH, LOTTO_PRIZES.THREE_MATCH),
  4: new LottoResult(LOTTO_MATCH_TEXT.FOUR_MATCH, LOTTO_PRIZES.FOUR_MATCH),
  5: new LottoResult(LOTTO_MATCH_TEXT.FIVE_MATCH, LOTTO_PRIZES.FIVE_MATCH),
  '5+bonus': new LottoResult(LOTTO_MATCH_TEXT.FIVE_MATCH_WITH_BONUS, LOTTO_PRIZES.FIVE_MATCH_WITH_BONUS),
  6: new LottoResult(LOTTO_MATCH_TEXT.SIX_MATCH, LOTTO_PRIZES.SIX_MATCH),
};

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

  #updateLottoResultCount(key) {
    if (key) {
      LOTTO_RESULTS[key].incrementCount();
    }
  }

  #calculateResult() {
    this.#purchasedLottoNumbersList.forEach((purchasedLottoNumbers) => {
      const matchCount = this.#getMatchCount(purchasedLottoNumbers);
      const key = this.#getResultKey(matchCount, purchasedLottoNumbers);
      this.#updateLottoResultCount(key);
    });
  }

  #calculateYield() {
    const ticketCount = this.#purchasedLottoNumbersList.length;
    const totalPrize = Object.values(LOTTO_RESULTS).reduce((total, result) => total + result.getTotalPrize(), 0);
    const yieldRatio = totalPrize / (ticketCount * LOTTO_PRICE);
    const profitability = (yieldRatio * 100).toFixed(1);
    return profitability;
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
