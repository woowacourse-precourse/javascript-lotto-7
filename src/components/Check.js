class Check {
  #winningNumbers;
  #bonusNumber;
  #purchasedNumbers;
  #isNumberMatched;
  #isBonusNumberMatched;
  #result;

  constructor(winningNumbers, bonusNumber, purchasedNumbers, results) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedNumbers = purchasedNumbers;
    this.#isNumberMatched = 0;
    this.#isBonusNumberMatched = false;
    this.#result = results;
    this.#calculateMatches();
  }

  #calculateMatches() {
    this.#isNumberMatched = this.#purchasedNumbers.filter((number) =>
      this.#winningNumbers.includes(number)
    ).length;

    this.#isBonusNumberMatched = this.#purchasedNumbers.includes(
      this.#bonusNumber
    );
  }

  updateResults() {
    if (this.#isNumberMatched === 6) {
      this.#result[4] += 1;
    } else if (this.#isNumberMatched === 5 && this.#isBonusNumberMatched) {
      this.#result[3] += 1;
    } else if (this.#isNumberMatched >= 3 && this.#isNumberMatched <= 5) {
      this.#result[this.#isNumberMatched - 3] += 1;
    }
  }
}

export default Check;
