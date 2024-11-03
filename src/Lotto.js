import { handleErrors } from './error/handleError.js';
import { lottoValidator } from './util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    handleErrors([
      () => lottoValidator.isLottoNumbersDuplicated(numbers),
      () => lottoValidator.isLottoNumbersInRange(numbers),
      () => lottoValidator.isLottoNumbersValidLength(numbers),
    ]);
  }

  getNumbers() {
    return this.#numbers;
  }

  // 비교 갯수 반환
  match(winningNumbers, winningBonusNumber) {
    const matchAmount = this.#numbers.reduce((acc, cur) => {
      if (winningNumbers.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const isBonus = this.#numbers.includes(winningBonusNumber);

    return {
      matchAmount,
      isBonus,
    };
  }
}

export default Lotto;
