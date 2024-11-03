class Result {
  #winningLottoNumbers;
  #bonusNumber;
  #lotteryNumbers;
  #purchaseAmount;
  #ranks = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

  constructor(
    winningLottoNumbers,
    bonusNumber,
    lotteryNumbers,
    purchaseAmount
  ) {
    (this.#winningLottoNumbers = winningLottoNumbers),
      (this.#bonusNumber = bonusNumber),
      (this.#lotteryNumbers = lotteryNumbers),
      (this.#purchaseAmount = purchaseAmount);
  }

  #parsedNumbers(numbersString) {
    const splittedNumbers = numbersString.split(',');
    return splittedNumbers.map((item) => parseInt(item.trim()));
  }

  #matchingCount(numbersString) {
    let result = 0;
    this.#parsedNumbers(numbersString).forEach((num) => {
      if (this.#winningLottoNumbers.includes(num)) result++;
      if (result === 5 && this.#bonusNumber === num) result += 0.5;
    });
    return result;
  }

  #winningRank(result) {
    if (result === 6) this.#ranks.first++;
    if (result === 5.5) this.#ranks.second++;
    if (result === 5) this.#ranks.third++;
    if (result === 4) this.#ranks.fourth++;
    if (result === 3) this.#ranks.fifth++;
  }

  getWinningRank() {
    return this.#ranks;
  }

  winningResult() {
    for (let i = 0; i < this.#lotteryNumbers.length; i++) {
      const result = this.#matchingCount(this.#lotteryNumbers[i]);
      this.#winningRank(result);
    }
  }
}
export default Result;
