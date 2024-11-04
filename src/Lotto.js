class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
