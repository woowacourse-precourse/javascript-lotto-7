import { ERROR_MESSAGES } from '../constants/Messages.js';
import VALUES from '../constants/Values.js';

class Validator {
  validateAmount(amount) {
    if (!this.divideIntoUnit(amount)) throw new Error(ERROR_MESSAGES.divideIntoUnit);
    if (!this.isIntegerGreaterThenZero(amount))
      throw new Error(ERROR_MESSAGES.integerGreaterThenZero);
  }

  validateWinningNumbers(numbers) {
    if (!this.validateDuplicatedNumber(numbers))
      throw new Error(ERROR_MESSAGES.duplicatedWinningNumber);
    if (!this.validateNumberRange(numbers)) throw new Error(ERROR_MESSAGES.invalidRangeNumber);
  }

  validateBonusNumber(bonusNumber) {
    if (!this.validateBonusNumbersLength(bonusNumber))
      throw new Error(ERROR_MESSAGES.invalidBonusNumberLength);
    if (!this.validateBonusNumberDuplicated(bonusNumber))
      throw new Error(ERROR_MESSAGES.duplicatedBonusNumber);
  }

  divideIntoUnit(amount) {
    return amount % VALUES.amountUnit === 0;
  }

  isIntegerGreaterThenZero(amount) {
    return Number.isInteger(amount) && amount > 0;
  }

  validateDuplicatedNumber(numbers) {
    return [...new Set(numbers)].length === numbers.length;
  }

  validateNumberRange(numbers) {
    return numbers.every(
      (number) => number >= VALUES.lottoMinNumber && number <= VALUES.lottoMaxNumber,
    );
  }

  validateWinningNumbersLength(numbers) {
    return numbers.length === VALUES.lottoLength;
  }

  validateBonusNumbersLength(numbers) {
    return numbers.length === VALUES.bonusNumberLength;
  }

  validateBonusNumberDuplicated(winningNumbers, bonusNumber) {
    return bonusNumber.every((number) => !winningNumbers.includes(number));
  }
}

export default Validator;
