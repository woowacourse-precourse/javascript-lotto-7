import { ERROR_MSG } from '../Constants.js';
import { checkDuplicate, checkRange } from '../Util.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MSG.invalidNumberCount);
    }

    numbers.forEach((number) => {
      if (checkRange(number, 1, 45)) {
        throw Error(ERROR_MSG.outOfLottoRange);
      }
    });

    if (checkDuplicate(numbers)) {
      throw Error(ERROR_MSG.duplicateNumber);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
