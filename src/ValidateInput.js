import { ERROR, LOTTO } from "./util/constant.js";

class Validate {
  static validateEmptyInput(input) {
    if (input === "") {
      throw new Error(ERROR.EMPTY_QUERY);
    };
  };

  static validateInputAmount(input) {
    if (input % LOTTO.PRICE !== 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    };
  };

  static validateString(input) {
    if (typeof input !== 'string') {
      throw new Error(ERROR.INVALID_LOTTO_NUMBERS_INPUT)
    };
  };

  static validateNumber(number) {
    if (isNaN(number) || !/^\d+$/.test(number)) {
      throw new Error(ERROR.INVALID_INPUT);
    }
  }

  static splitNumbers(numbers) {
    return numbers.split(',');
  };

  static validateLottoNumbersCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR.INVALID_LOTTO_COUNT);
    };
  }

  static validateLottoRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR.INVALID_LOTTO_NUMBERS);
    };
  }

  static validateWinningNumbers(winningNumbers) {
    this.validateString(winningNumbers);
    const numbers = this.splitNumbers(winningNumbers);
    this.validateNumbersArray(numbers);

    return numbers;
  }

  static validateNumbersArray(numbers) {
    this.validateLottoNumbersCount(numbers);
    numbers.forEach((number) => {
      this.validateNumber(number);
      this.validateLottoRange(number);
    });

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.NUMBER_EXISTS);
    };
  };

  static validateBonus(bonus, winningNumbers) {
    this.validateEmptyInput(bonus);
    const number = Number(bonus);
    this.validateNumber(number);
    this.validateLottoRange(number);

    winningNumbers.forEach((number) => {
      if (number === bonus) {
        throw new Error(ERROR.DUPLICATE_LOTTO_NUMBERS);
      };
    });

    return number;
  };
};

export default Validate;