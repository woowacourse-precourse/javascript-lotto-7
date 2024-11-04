class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.validateDuplicates(numbers);
    this.validateRange(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  validateRange(numbers) {
    const isInvalidRange = numbers.some((num) => num < 1 || num > 45);
    if (isInvalidRange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  match(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  hasBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
