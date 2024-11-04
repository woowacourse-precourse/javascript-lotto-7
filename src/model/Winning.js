class Winning {
  #matchCount;
  #profitRate;
  #prize;
  constructor() {
    this.#matchCount = {
      3: 0,
      4: 0,
      5: 0,
      "5+bonus": 0,
      6: 0,
    };
    this.#prize = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
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

  #calculateProfitRate(purchaseAmount) {
    const totalPrize = Object.keys(this.#prize).reduce((sum, key) => {
      return sum + this.#prize[key] * this.#matchCount[key];
    }, 0);

    this.#profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    return this.#profitRate;
  }

  getMatchCount(lottoCollection, winningNumber, bonusNumber) {
    return this.#resultMatchCount(lottoCollection, winningNumber, bonusNumber);
  }

  getProfitRate(purchaseAmount) {
    return this.#calculateProfitRate(purchaseAmount);
  }
}

export default Winning;
