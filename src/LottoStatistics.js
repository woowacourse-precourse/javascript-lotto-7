import { LOTTO_PRIZES, MIN_MATCH_FOR_PRIZE, FIVE_BONUS_KEY } from './constants/lottoConstants.js';

class LottoStatistics {
  #purchasedLottos;

  #winningLotto;

  #winningStatistics;

  #purchaseAmount;

  constructor(purchasedLottos, winningLotto, purchaseAmount) {
    this.#purchasedLottos = purchasedLottos;
    this.#winningLotto = winningLotto;
    this.#purchaseAmount = purchaseAmount;
    this.#winningStatistics = {
      3: { count: 0, prize: LOTTO_PRIZES.THREE_MATCH },
      4: { count: 0, prize: LOTTO_PRIZES.FOUR_MATCH },
      5: { count: 0, prize: LOTTO_PRIZES.FIVE_MATCH },
      6: { count: 0, prize: LOTTO_PRIZES.SIX_MATCH },
      [FIVE_BONUS_KEY]: { count: 0, prize: LOTTO_PRIZES.FIVE_BONUS_MATCH },
    };
  }

  calculateStatistics() {
    const winningNumbers = this.#winningLotto.getNumbers();
    const bonusNumber = this.#winningLotto.getBonusNumber();

    this.#purchasedLottos.forEach((lotto) => {
      const matchedNumCount = LottoStatistics.#getMatchedNumCount(lotto, winningNumbers);
      const hasBonus = LottoStatistics.#hasBonusNumber(lotto, bonusNumber);
      this.#recordMatchedResult(matchedNumCount, hasBonus);
    });
  }

  static #getMatchedNumCount(lotto, winningNumbers) {
    return lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
  }

  static #hasBonusNumber(lotto, bonusNumber) {
    return lotto.getNumbers().includes(bonusNumber);
  }

  #recordMatchedResult(matchedNumCount, hasBonus) {
    if (matchedNumCount === 5 && hasBonus) {
      this.#winningStatistics[FIVE_BONUS_KEY].count += 1;
      return;
    }
    if (matchedNumCount >= MIN_MATCH_FOR_PRIZE) {
      this.#winningStatistics[matchedNumCount].count += 1;
    }
  }

  #calculateTotalPrize() {
    return Object.values(this.#winningStatistics).reduce(
      (total, { count, prize }) => total + count * prize,
      0,
    );
  }

  #calculateRageOfReturn() {
    const totalPrize = this.#calculateTotalPrize();
    const rangeOfReturn = (totalPrize / this.#purchaseAmount) * 100;
    return rangeOfReturn.toFixed(1);
  }

  getWinningStatistics() {
    return this.#winningStatistics;
  }

  getRangeOfReturn() {
    return this.#calculateRageOfReturn();
  }
}

export default LottoStatistics;
