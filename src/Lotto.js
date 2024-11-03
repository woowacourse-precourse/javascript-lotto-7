class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  sortAscending() {
    this.#numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  contains(winningNumber) {
    return this.#numbers.includes(winningNumber);
  }
}

export default Lotto;
