class LottoResult {
  constructor(purchasedNumbers, winningNumbers, bonusNumber) {
    this.purchasedNumbers = purchasedNumbers;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.results = {
      3: 0,
      4: 0,
      5: {
        count: 0,
        bonus: 0,
      },
      6: 0,
    };
  }

  checkResults() {
    this.purchasedNumbers.forEach(lotto => {
      const matchCount = this.getMatchCount(lotto);
      this.updateResults(matchCount, lotto);
    });
  }

  getMatchCount(lotto) {
    return lotto.filter(number => this.winningNumbers.includes(number)).length;
  }

  updateResults(matchCount, lotto) {
    if (matchCount === 3) {
      this.results[3]++;
    }

    if (matchCount === 4) {
      this.results[4]++;
    }

    if (matchCount === 5) {
      if (this.bonusNumber && lotto.includes(this.bonusNumber)) {
        this.results[5].bonus++;
      } else {
        this.results[5].count++;
      }
    }

    if (matchCount === 6) {
      this.results[6]++;
    }
  }

  getResults() {
    return this.results;
  }
}

export default LottoResult;
