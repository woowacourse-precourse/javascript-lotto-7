import ValidatorModule from '../utils/ValidatorModules.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    ValidatorModule.checkLottoNumbers(numbers);
  }

  getNumberOfSameNumber(otherNumbers) {
    return this.#numbers.filter((element) => otherNumbers.includes(element)).length;
  }

  getIsIncludesNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
