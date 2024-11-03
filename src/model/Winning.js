class Winning {
  #matchCount;

  constructor() {
    this.#matchCount = {
      3: 0,
      4: 0,
      5: 0,
      "5+bonus": 0,
      6: 0,
    };
  }

  #resultMatchCount(lottoCollection, winningNumber, bonusNumber) {
    lottoCollection.forEach((lotto) => {
      this.#calculateMatchCount(lotto, winningNumber, bonusNumber);
    });

    return this.#matchCount;
  }

  #calculateMatchCount(lotto, winningNumber, bonusNumber) {
    const matchCount = this.#getMatchCount(
      lotto.getLottoNumber(),
      winningNumber
    );
    if (matchCount === 5 && this.#includeBonusNumber(lotto, bonusNumber)) {
      this.#matchCount["5+bonus"]++;
    } else if (matchCount >= 3) {
      this.#matchCount[matchCount]++;
    }
  }

  #getMatchCount(lotto, winningNumber) {
    return lotto.filter((number) => winningNumber.includes(number)).length;
  }

  #includeBonusNumber(lotto, bonusNumber) {
    return lotto.getLottoNumber().includes(bonusNumber[0]);
  }

  getMatchCount(lottoCollection, winningNumber, bonusNumber) {
    return this.#resultMatchCount(lottoCollection, winningNumber, bonusNumber);
  }
}

export default Winning;
