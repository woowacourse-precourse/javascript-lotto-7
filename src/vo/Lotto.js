class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLotto(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {}
}

export default Lotto;
