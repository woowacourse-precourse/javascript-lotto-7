import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
import { throwWoowaError } from '../util/error.js';
import { validateLottoNumber } from '../util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== RULE.lotto.lottoSize) {
      throwWoowaError(ERROR_MESSAGE.invalidNumberSize);
    }

    if (new Set(numbers).size !== RULE.lotto.lottoSize) {
      throwWoowaError(ERROR_MESSAGE.invalidDuplicateNumber);
    }

    numbers.forEach((number) => {
      validateLottoNumber(number);
    });
  }

  hasInNumbers(number) {
    return this.#numbers.includes(number);
  }

  countMatchingNumbers(lotto) {
    return this.#numbers.filter((number) => lotto.hasInNumbers(number)).length;
  }
}

export default Lotto;
