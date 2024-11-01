class LottoPrize {
  #winningNumbers;

  constructor() {
    this.#winningNumbers = {};
  }

  createWinningNumbers(numbers) {
    numbers.split(",").forEach((number) => {
      this.#winningNumbers[number] = true;
    });
  }

  isWinningNumber(number) {
    if (this.#winningNumbers[number]) return true;
    return false;
  }
}

export default LottoPrize;
