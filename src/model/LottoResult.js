import { LOTTO } from '../constant/constants.js';

export default class LottoResult {
  #winningNumber;
  #bonusNumber;
  #lottos;
  #result;

  constructor(winningNumbers, lottos) {
    this.#winningNumber = winningNumbers.winningNumber;
    this.#bonusNumber = winningNumbers.bonusNumber;
    this.#lottos = lottos;
    this.#result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.#matchLotto();
  }

  #matchLotto() {
    this.#lottos.forEach((lotto) => {
      const count = this.#getMatchedLottoCount(lotto);
      if (count < LOTTO.MIN_WINNING_MATCH_COUNT) return;

      const rank = this.#getRank(count, lotto);
      this.#result[rank] += 1;
    });
  }

  #getMatchedLottoCount(lotto) {
    const matchedNumbers = lotto.filter((lottoNumber) =>
      this.#winningNumber.includes(lottoNumber),
    );

    return matchedNumbers.length;
  }

  #getRank(count, lotto) {
    if (count === LOTTO.FIRST_PLACE_MATCH_COUNT) {
      return LOTTO.FIRST_PLACE_RANK;
    }
    if (
      count === LOTTO.SECOND_PLACE_MATCH_COUNT &&
      this.#isBonusMatching(lotto)
    ) {
      return LOTTO.SECOND_PLACE_RANK;
    }

    return LOTTO.MATCH_COUNT_BASE - count;
  }

  #isBonusMatching(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  getResult() {
    return this.#result;
  }
}
