class LottoWinningNumbers {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = -1;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }
}

export default LottoWinningNumbers;
