class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
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

  match(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
