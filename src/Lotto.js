class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 숫자만 입력이 가능합니다.');
    }

    return Number(input);
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  containsBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
