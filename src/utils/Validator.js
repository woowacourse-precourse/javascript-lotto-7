import { ERROR_MESSAGES } from '../constants/Messages.js';
import { VALUES } from '../constants/Values.js';

const validator = {
  validateAmount(amount) {
    const numericAmount = Number(amount);
    if (!this.isIntegerGreaterThenZero(numericAmount))
      throw new Error(ERROR_MESSAGES.integerGreaterThenZero);
    if (!this.divideIntoUnit(numericAmount)) throw new Error(ERROR_MESSAGES.divideIntoUnit);
  },

  validateLottoNumbers(numbersArray) {
    if (!this.validateDuplicatedNumber(numbersArray))
      throw new Error(ERROR_MESSAGES.duplicatedWinningNumber);
    if (!this.validateNumberRange(numbersArray)) throw new Error(ERROR_MESSAGES.invalidRangeNumber);
    if (!this.validateWinningNumbersLength(numbersArray))
      throw new Error(ERROR_MESSAGES.invalidWinningNumberLength);
  },

  validateBonusNumber(winningNumbers, bonusNumbers) {
    if (!this.validateBonusNumbersLength(bonusNumbers))
      throw new Error(ERROR_MESSAGES.invalidBonusNumberLength);
    if (!this.validateBonusNumberDuplicated(winningNumbers, bonusNumbers))
      throw new Error(ERROR_MESSAGES.duplicatedBonusNumber);
  },

  divideIntoUnit(amount) {
    return amount % VALUES.amountUnit === 0;
  },

  isIntegerGreaterThenZero(amount) {
    return Number.isInteger(amount) && amount > 0;
  },

  validateDuplicatedNumber(numbers) {
    return [...new Set(numbers)].length === numbers.length;
  },

  validateNumberRange(numbers) {
    return numbers.every(
      (number) => number >= VALUES.lottoMinNumber && number <= VALUES.lottoMaxNumber,
    );
  },

  validateWinningNumbersLength(numbers) {
    return numbers.length === VALUES.lottoLength;
  },

  validateBonusNumbersLength(numbers) {
    return numbers.length === VALUES.bonusNumberLength;
  },

  validateBonusNumberDuplicated(winningNumbers, bonusNumber) {
    return bonusNumber.every((number) => !winningNumbers.includes(number));
  },
};

export default validator;
