class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateNumber(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateNumber(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복이 있습니다.');
    }
  }

  toString(numbers) {
    return `[${numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
