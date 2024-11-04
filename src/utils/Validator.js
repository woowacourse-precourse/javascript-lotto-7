import { ERROR_MESSAGES } from '../constants/Messages.js';
import { CHARS, VALUES } from '../constants/Values.js';

const validator = {
  validateAmount(amount) {
    const numericAmount = Number(amount);
    if (!this.isIntegerGreaterThenZero(numericAmount))
      throw new Error(ERROR_MESSAGES.integerGreaterThenZero);
    if (!this.divideIntoUnit(numericAmount)) throw new Error(ERROR_MESSAGES.divideIntoUnit);
  },

  validateLottoNumbers(numbers) {
    if (!this.uniqueNumber(numbers)) throw new Error(ERROR_MESSAGES.duplicatedWinningNumber);
    if (!this.validRangeInteger(numbers)) throw new Error(ERROR_MESSAGES.invalidRangeNumber);
    if (!this.validWinningNumbersLength(numbers))
      throw new Error(ERROR_MESSAGES.invalidWinningNumberLength);
  },

  validateLottoNumbersString(numbers) {
    if (!this.validNumbersString(numbers)) throw new Error(ERROR_MESSAGES.invalidNumberFormat);
  },

  validateBonusNumber(winningNumbers, bonusNumbersArray) {
    if (!this.validBonusNumbersLength(bonusNumbersArray))
      throw new Error(ERROR_MESSAGES.invalidBonusNumberLength);
    if (!this.uniqueBonusNumber(winningNumbers, bonusNumbersArray))
      throw new Error(ERROR_MESSAGES.duplicatedBonusNumber);
  },

  validateBonusNumberString(bonusNumberString) {
    if (!this.validNumbersString(bonusNumberString))
      throw new Error(ERROR_MESSAGES.invalidNumberFormat);
  },

  divideIntoUnit(amount) {
    return amount % VALUES.amountUnit === 0;
  },

  isIntegerGreaterThenZero(amount) {
    return Number.isInteger(amount) && amount > 0;
  },

  uniqueNumber(numbers) {
    return [...new Set(numbers)].length === numbers.length;
  },

  validRangeInteger(numbers) {
    return numbers.every(
      (number) =>
        number >= VALUES.lottoMinNumber &&
        number <= VALUES.lottoMaxNumber &&
        Number.isInteger(number),
    );
  },

  validWinningNumbersLength(numbers) {
    return numbers.length === VALUES.lottoLength;
  },

  validNumbersString(numberString) {
    const splitedString = numberString.split(CHARS.inputNumbersDelimiter);
    return splitedString.every((string) => string.trim() === string && string);
  },

  validBonusNumbersLength(numbers) {
    return numbers.length === VALUES.bonusNumberLength;
  },

  uniqueBonusNumber(winningNumbers, bonusNumber) {
    return bonusNumber.every((number) => !winningNumbers.includes(number));
  },
};

export default validator;
