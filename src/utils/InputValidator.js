import ERROR_MESSAGE from "../static/Error.js";
import LOTTO_CONFIG from "../static/LottoConfig.js";

const InputValidator = {
  validatePurchaseAmount(input) {
    this.validateEmpty(input);
    const amount = this.convertToNumber(input);
    
    if (amount <= 0) {
      throw new Error(ERROR_MESSAGE.purchase.NOT_POSITIVE);
    }
    if (amount % LOTTO_CONFIG.price.UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.purchase.INVALID_UNIT);
    }
    
    return amount;
  },

  validateWinningNumbers(input) {
    this.validateEmpty(input);
    this.validateWinningNumberFormat(input);
    const numbers = this.parseAndValidateNumbers(input);
    this.validateUniqueNumbers(numbers);
    return numbers;
  },

  parseAndValidateNumbers(input) {
    const numbers = input.split(",")
      .map(number => this.validateAndConvertNumber(number.trim()));
    numbers.forEach(this.validateLottoNumber);
    return numbers;
  },

  validateUniqueNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO_CONFIG.numbers.LENGTH) {
      throw new Error(ERROR_MESSAGE.winningNumbers.DUPLICATE);
    }
  },

  validateBonusNumber(input, winningNumbers) {
    this.validateEmpty(input);
    this.validateBonusNumberFormat(input);
    
    const number = this.validateAndConvertNumber(input.trim());
    this.validateLottoNumber(number);

    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.bonus.DUPLICATE);
    }
    
    return number;
  },

  validateLottoNumber(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.lotto.INVALID_TYPE);
    }
    if (number < LOTTO_CONFIG.numbers.MIN || number > LOTTO_CONFIG.numbers.MAX) {
      throw new Error(ERROR_MESSAGE.lotto.INVALID_RANGE);
    }
  },

  validateEmpty(input) {
    if (!input || input.trim() === '') {
      throw new Error(ERROR_MESSAGE.winningNumbers.INVALID_FORMAT);
    }
  },

  validateWinningNumberFormat(input) {
    if (input.includes(',,') || input.startsWith(',') || input.endsWith(',')) {
      throw new Error(ERROR_MESSAGE.winningNumbers.INVALID_COMMA);
    }
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.winningNumbers.HAS_SPACES);
    }
    if (!input.match(/^\d+(,\d+){5}$/)) {
      throw new Error(ERROR_MESSAGE.winningNumbers.INVALID_FORMAT);
    }
  },

  validateBonusNumberFormat(input) {
    if (input.includes(',')) {
      throw new Error(ERROR_MESSAGE.bonus.INVALID_FORMAT);
    }
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.bonus.HAS_SPACES);
    }
  },

  validateAndConvertNumber(input) {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.winningNumbers.NOT_NUMBERS);
    }
    return number;
  },

  convertToNumber(input) {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.purchase.NOT_NUMBER);
    }
    return number;
  }
};

export default InputValidator;