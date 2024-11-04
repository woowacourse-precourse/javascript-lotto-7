class LottoRank {
  #matchCount;
  #money;
  #hasBonus;
  #count;

  constructor(matchCount, money, hasBonus = false) {
    this.#matchCount = matchCount;
    this.#money = money;
    this.#hasBonus = hasBonus;
    this.#count = 0;
  }

  addCount() {
    this.#count += 1;
  }

  getTotalMoney() {
    return this.#money * this.#count;
  }

  getCount() {
    return this.#count;
  }
}

export default LottoRank;
