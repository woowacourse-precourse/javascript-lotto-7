import ValidateWinningNumbers from './models/ValidateWinningNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    const validator = new ValidateWinningNumbers();
    validator.validateWinningNumbersFormat(numbers.join(','));
    validator.validateDuplicateNumbers(numbers);
    numbers.forEach((number) => validator.validateNumberRange(number));
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
