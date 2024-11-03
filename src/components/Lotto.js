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

    if (this.#numbers.includes(bonusNumber) && matchCount === 5) {
      return 5.5;
    }

    return matchCount;
  }
}

export default Lotto;
