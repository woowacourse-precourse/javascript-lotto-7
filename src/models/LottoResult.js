class LottoResult {
  #numbers;
  #matchCount;
  #isBonusMatch;
  #ranking;
  #prizeMoney;

  constructor({ numbers, matchCount, isBonusMatch, ranking, prizeMoney }) {
    this.#numbers = numbers;
    this.#matchCount = matchCount;
    this.#isBonusMatch = isBonusMatch;
    this.#ranking = ranking;
    this.#prizeMoney = prizeMoney;
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount() {
    return this.#matchCount;
  }

  isBonusMatch() {
    return this.#isBonusMatch;
  }

  getRanking() {
    return this.#ranking;
  }

  getPrizeMoney() {
    return this.#prizeMoney;
  }
}

export default LottoResult;
