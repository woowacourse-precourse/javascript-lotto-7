import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constant';

const LOTTO_RESULTS = {
  3: { matchText: '3개 일치', prize: 5000, count: 0 },
  4: { matchText: '4개 일치', prize: 50000, count: 0 },
  5: { matchText: '5개 일치', prize: 1500000, count: 0 },
  '5+bonus': { matchText: '5개 일치, 보너스 볼 일치', prize: 30000000, count: 0 },
  6: { matchText: '6개 일치', prize: 2000000000, count: 0 },
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
      LOTTO_RESULTS[key].count += 1;
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
    const totalPrize = Object.values(LOTTO_RESULTS).reduce((total, { prize, count }) => total + prize * count, 0);
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
