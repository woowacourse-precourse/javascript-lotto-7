class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicates(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  #validateRange(numbers) {
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
