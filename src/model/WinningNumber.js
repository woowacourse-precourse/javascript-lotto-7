class WinningNumber {
  #numbers;
  #bonus;
  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  WinningNumber(numbers, bonus) {
    this.numbers = numbers;
    this.bonus = bonus;
  }
  get numbers() {
    return this.numbers;
  }
  get bonus() {
    return this.bonus;
  }
}
