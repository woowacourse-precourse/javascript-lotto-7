class LottoPrize {
  #prizeManager;
  #issuedLottos;
  #winningNumbers;
  #bonusNumber;

  constructor(issuedLottos, winningNumbers, bonusNumber) {
    this.#prizeManager = this.#initPrizeManager();
    this.#issuedLottos = issuedLottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #initPrizeManager() {
    return {
      3: {
        count: 0,
        reward: 5000,
      },
      4: {
        count: 0,
        reward: 50000,
      },
      5: {
        count: 0,
        reward: 1500000,
      },
      '5 + bonus': {
        count: 0,
        reward: 30000000,
      },
      6: {
        count: 0,
        reward: 2000000000,
      },
    };
  }

  countMatchingNumbers() {
    for (let i = 0; i < this.#issuedLottos.length; i++) {
      const compareNumbers = this.#winningNumbers.filter((number) =>
        this.#issuedLottos[i].includes(number)
      );
      const matchCount = compareNumbers.length;
      this.checkBonusNumberMatch(matchCount, i);
    }
  }

  checkBonusNumberMatch(matchCount, i) {
    if (this.#issuedLottos[i].includes(this.#bonusNumber) && matchCount === 5) {
      ++this.#prizeManager['5 + bonus'].count;
    } else if (matchCount > 2) {
      ++this.#prizeManager[matchCount].count;
    }
  }

  calculateROI(price) {
    let totalProfit = 0;
    for (let value of Object.values(this.#prizeManager)) {
      if (value !== 0) {
        totalProfit += value.reward * value.count;
      }
    }

    return ((totalProfit / price) * 100).toFixed(1);
  }

  get prizeManager() {
    return this.#prizeManager;
  }
}

export default LottoPrize;
