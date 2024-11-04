import { MATCH_COUNT } from './constants.js';

class LottoResult {
  #winningNumbers;
  #bonusNumber;
  #purchasedLottos;

  constructor(winningNumbers, bonusNumber, purchasedLottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedLottos = purchasedLottos;
    this.winningRank = {
      [MATCH_COUNT.three]: 0,
      [MATCH_COUNT.four]: 0,
      [MATCH_COUNT.five]: 0,
      [MATCH_COUNT.six]: 0,
      bonus: 0,
    };
  }

  #isIncludeMatchNumer(purchasedLotto, winningNumber) {
    const isInclude = purchasedLotto.includes(Number(winningNumber));
    if (isInclude) {
      return true;
    }

    return false;
  }

  #compareLottoNumbers(purchasedLotto) {
    const matchCount = this.#winningNumbers.filter((winningNumber) =>
      this.#isIncludeMatchNumer(purchasedLotto, winningNumber)
    ).length;

    return matchCount;
  }

  #bonusOrNot(purchasedLotto) {
    const isBonus = purchasedLotto.includes(this.#bonusNumber);
    if (isBonus) {
      return MATCH_COUNT.bonus;
    }

    return MATCH_COUNT.five;
  }

  #toRank(matchCount, purchasedLotto) {
    if (matchCount === MATCH_COUNT.three) {
      return MATCH_COUNT.three;
    }
    if (matchCount === MATCH_COUNT.four) {
      return MATCH_COUNT.four;
    }
    if (matchCount === MATCH_COUNT.six) {
      return MATCH_COUNT.six;
    }
    if (matchCount === MATCH_COUNT.five) {
      this.#bonusOrNot(purchasedLotto);
    }
  }

  #addRankCount(rank) {
    this.winningRank[rank] += 1;
  }

  #getWinningResult(purchasedLotto) {
    const matchCount = this.#compareLottoNumbers(purchasedLotto);
    const rank = this.#toRank(matchCount, purchasedLotto);
    this.#addRankCount(rank);
  }

  async lottoResult() {
    this.#purchasedLottos.map((purchasedLotto) => {
      this.#getWinningResult(purchasedLotto);
    });

    return this.winningRank;
  }
}

export default LottoResult;
