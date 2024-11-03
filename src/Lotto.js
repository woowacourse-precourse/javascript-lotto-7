class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
