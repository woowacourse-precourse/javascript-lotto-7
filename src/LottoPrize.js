class LottoPrize {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = {};
    this.#bonusNumber = 0;
  }

  createWinningNumbers(numbers) {
    numbers.split(",").forEach((number) => {
      this.#winningNumbers[number] = true;
    });
  }

  createBonusNumber(number) {
    this.#bonusNumber = Number(number);
  }

  isWinningNumber(number) {
    if (this.#winningNumbers[number]) return true;
    return false;
  }

  isBonusNumber(number) {
    return this.#bonusNumber === number;
  }
}

export default LottoPrize;
