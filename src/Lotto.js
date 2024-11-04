import LottoListValidator from './util/validators/LottoListValidator.js';
import LottoNumValidator from './util/validators/LottoNumValidator.js';
import trimNums from './util/formatters/trimNums.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    const trimmedNumbers = trimNums(numbers);
    LottoListValidator.validate(trimmedNumbers);
    LottoNumValidator.validate(trimmedNumbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
