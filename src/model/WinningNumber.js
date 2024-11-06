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
  getnumbers() {
    return this.numbers;
  }
  getbonus() {
    return this.bonus;
  }
}
export default WinningNumber;
