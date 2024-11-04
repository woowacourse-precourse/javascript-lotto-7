import { ERROR_MESSAGES } from "../constants/messages";
import { LOTTO_RULES_CONSTANTS } from "../constants/lottoRules";

class LottoValidator {
  static validateLottoNumbers(numbers) {
    LottoValidator.checkDuplicateNumber(numbers);
    LottoValidator.checkSixNumbers(numbers);
    numbers.forEach(number => {
      LottoValidator.checkEachNumber(number);
    })
  };
  static validateBonusNumber(winning, bonus) {
    LottoValidator.checkEachNumber(bonus);
    LottoValidator.checkDuplicateNumber([...winning, bonus]);
  }

  static checkEachNumber(number) {
    LottoValidator.checkIsNumber(number);
    LottoValidator.checkNumberRange(number);
    LottoValidator.checkIsInteger(number);
  }

  static checkSixNumbers(numbers) {
    if (numbers.length !== LOTTO_RULES_CONSTANTS.lotto_length) {
      throw new Error(ERROR_MESSAGES.invalid_length);
    }
  }
  static checkDuplicateNumber(numbers) {
    if(numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGES.duplicate_number);
    }
  }
  static checkNumberRange(number) {
    if(number < LOTTO_RULES_CONSTANTS.lotto_min_number || number > LOTTO_RULES_CONSTANTS.lotto_max_number) {
      throw new Error(ERROR_MESSAGES.invalid_range);
    }
  }
  static checkIsNumber(number) {
    if(isNaN(number)) {
      throw new Error(ERROR_MESSAGES.not_a_number);
    }
  }
  static checkIsInteger(number) {
    if(!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGES.not_a_integer);
    }
  }
};

export default LottoValidator;