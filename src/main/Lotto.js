class Lotto {
  #numbers;
  #bonusNumber;
  #winningNumbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
    return this.#bonusNumber;
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  getMatchCount() {
    return this.#winningNumbers.filter((number) => this.#numbers.includes(number)).length;
  }
}

export default Lotto;
