import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE as ERROR } from "./constants/errorMessage.js";
import { LOTTO_PRICE, LOTTO_NUMBERS_LENGTH } from "./constants/lotto.js";

class Validation {
  static checkIsEmpty(input) {
    if (!input) {
      throw Error(ERROR.EMPTY_INPUT);
    }
  }

  static checkIsDivisibleByLottoPrice(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw Error(ERROR.INVALID_PURCHASE_AMOUNT);
    }
  }

  static checkIsNumber(input) {
    if (isNaN(Number(input))) {
      throw Error(ERROR.NOT_NUMBER);
    }
  }

  static checkNumberRange(input) {
    if (input < 1 || input > 45) {
      throw Error(ERROR.INVALID_NUMBERS_RANGE);
    }
  }

  static checkNumbersLength(input) {
    if (input.length !== LOTTO_NUMBERS_LENGTH) {
      throw Error(ERROR.INVALID_NUMBERS_LENGTH);
    }
  }

  static checkHasDuplicatedNumber(input) {
    if (input.length !== new Set(input).size) {
      throw Error(ERROR.DUPLICATED_NUMBER);
    }
  }

  static checkIsContainedInWinningNumbers(input, numbers) {
    if (numbers.includes(input)) {
      throw Error(ERROR.CONTAINED_NUMBER);
    }
  }

  static checkWinningNumbersError(input) {
    this.checkIsEmpty(input);

    const winningNumbers = input.split(",").map((number) => {
      this.checkIsNumber(number.trim());
      this.checkNumberRange(Number(number));

      return number.trim();
    });

    this.checkNumbersLength(winningNumbers);
    this.checkHasDuplicatedNumber(winningNumbers);

    return winningNumbers;
  }

  static checkBonusNumberError(input, winningNumbers) {
    this.checkIsEmpty(input);
    this.checkIsNumber(input);
    this.checkNumberRange(input);
    this.checkIsContainedInWinningNumbers(input, winningNumbers);

    return input;
  }
}

export default Validation;
