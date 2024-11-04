import { LOTTO_NUMBER_ERROR_MESSAGES } from './constants/ERROR_MESSAGES.js';
import { LOTTO } from './constants/LOTTO_CONSTANTS.js';
import { stringToNumber } from './utils/stringToNumber.js';
import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  countMatchingNumbers(generatedNumbers) {
    const matchedCount = generatedNumbers.filter((number) =>
      this.#numbers.includes(number)
    ).length;

    return matchedCount;
  }

  isDuplicateBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return true;
    return false;
  }

  #validate(numbers) {
    this.#validateLottoNumberCount(numbers);
    const lottoNumbers = numbers.map((value) => {
      Validator.validateWhitespace(value);
      Validator.validateNaturalNumber(value);
      const number = stringToNumber(value);
      Validator.validateLottoNumberRange(number);
      return number;
    });
    this.#validateDuplicateLottoNumber(lottoNumbers);
    return lottoNumbers;
  }

  #validateDuplicateLottoNumber(numbers) {
    const isDuplicate = numbers.length !== new Set(numbers).size;

    if (isDuplicate) {
      throw new Error(
        LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_DUPLICATE_NUMBERS_FOUND
      );
    }
  }

  #validateLottoNumberCount(splitNumbers) {
    if (splitNumbers.length !== LOTTO.NUMBER_COUNT) {
      throw new Error(
        LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_NUMBER_COUNT_MUST_BE_SIX
      );
    }
  }
}

export default Lotto;
