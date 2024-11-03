class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  match(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
