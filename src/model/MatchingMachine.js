export default class MatchingMachine {
  #winningNumber;
  #bonusNumber;
  #lottos;
  #result;

  constructor(winningNumber, bonusNumber, lottos) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos;
    this.#result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  matchLotto() {
    this.#lottos.forEach((lotto) => {
      const count = this.#getMatchedLottoCount(lotto);
      if (count < 3) return;

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
    if (count === 6) {
      return 1;
    }
    if (count === 5 && this.#isBonusMatching(lotto)) {
      return 2;
    }

    return 8 - count;
  }

  #isBonusMatching(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  getResult() {
    return this.#result;
  }
}
