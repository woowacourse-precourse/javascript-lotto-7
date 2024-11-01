import { sortNumbers } from '../utils/NumberUtils.js';
import validateLotto from '../utils/validation/validateLotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = sortNumbers(numbers);
  }

  #validate(numbers) {
    validateLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  match(winningLotto, bonusNumber) {
    const matchCount = winningLotto.reduce((acc, number) => {
      if (this.#numbers.includes(number)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (this.#numbers.includes(bonusNumber)) {
      return matchCount === 5 ? 5.5 : matchCount;
    }

    return matchCount;
  }
}

export default Lotto;
