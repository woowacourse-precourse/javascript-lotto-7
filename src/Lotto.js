import ValidateWinningNumbers from './models/ValidateWinningNumbers.js';

class Lotto {
  #numbers;

  #validator;

  constructor(numbers) {
    this.#validator = new ValidateWinningNumbers();
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#validator.validateWinningNumbersFormat(numbers.join(','));
    this.#validator.validateDuplicateNumbers(numbers);
    numbers.forEach((number) => this.#validator.validateNumberRange(number));
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
