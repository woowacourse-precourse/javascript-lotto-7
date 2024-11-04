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
    const isIncludeWinningNumber = purchasedLotto.includes(
      Number(winningNumber)
    );

    if (isIncludeWinningNumber) {
      return true;
    }

    return false;
  }

  #addMatchCount(isIncludeMatchNumer, count) {
    if (isIncludeMatchNumer) {
      return (count += 1);
    }
    return count;
  }

  #compareLottoNumbers(purchasedLotto) {
    let count = 0;

    this.#winningNumbers.forEach((winningNumber) => {
      const isIncludeMatchNumer = this.#isIncludeMatchNumer(
        purchasedLotto,
        winningNumber
      );

      count = this.#addMatchCount(isIncludeMatchNumer, count);
    });

    return count;
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

  #addRankCount(count) {
    this.winningRank[count] += 1;
  }

  #getWinningResult() {
    this.#purchasedLottos.map((purchasedLotto) => {
      const matchCount = this.#compareLottoNumbers(purchasedLotto);
      const rank = this.#toRank(matchCount, purchasedLotto);
      this.#addRankCount(rank);
    });
  }

  async lottoResult() {
    this.#getWinningResult();

    return this.winningRank;
  }
}

export default LottoResult;
