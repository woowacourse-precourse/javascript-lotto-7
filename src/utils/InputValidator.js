import { ERROR_MESSAGE, LOTTO_CONFIG } from "../static/Static.js";

const InputValidator = {
  validatePurchaseAmount(input) {
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
    if (!input.match(/^\d+(,\d+){5}$/)) {
      throw new Error(ERROR_MESSAGE.winningNumbers.INVALID_FORMAT);
    }

    const numbers = input.split(",")
      .map(number => this.convertToNumber(number.trim()));

    if (new Set(numbers).size !== LOTTO_CONFIG.numbers.LENGTH) {
      throw new Error(ERROR_MESSAGE.winningNumbers.DUPLICATE);
    }

    numbers.forEach(this.validateLottoNumber);
    return numbers;
  },

  validateBonusNumber(input, winningNumbers) {
    const number = this.convertToNumber(input);
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

  convertToNumber(input) {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.purchase.NOT_NUMBER);
    }
    return number;
  }
};

export default InputValidator;