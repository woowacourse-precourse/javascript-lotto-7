import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "../constants.js";

class InputView {
  static validateIsNumber(value) {
    if (isNaN(value)) {
      throw new Error(ERROR.INPUT.NOT_A_NUMBER);
    }
  }

  static validateInRange(num) {
    if (num > 45 || num < 1) {
      throw new Error(ERROR.INPUT.NOT_IN_RANGE);
    }
  }

  static async getPayment() {
    const payment = await Console.readLineAsync(MESSAGE.INPUT.PAYMENT);
    this.validatePayment(payment);

    return payment;
  }

  static validatePayment(payment) {
    this.validateIsNumber(payment);
    if (Number(payment) <= 0)
      throw new Error(ERROR.INPUT.NOT_A_POSITIVE_NUMBER);
  }

  static async getWinningNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.INPUT.WINNING_NUMBER);
    this.validateWinningNumber(numbers);

    return numbers.split(",").map((num) => Number(num.trim()));
  }

  static validateWinningNumber(numbers) {
    const splitedNums = numbers.split(",");
    splitedNums.map((num) => {
      this.validateIsNumber(num);
      this.validateInRange(num);
    });
  }

  static async getBonusNumber() {
    const bonusNum = await Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
    this.validateBonusNumber(bonusNum);

    return Number(bonusNum);
  }

  static validateBonusNumber(number) {
    this.validateIsNumber(number);
    this.validateInRange(number);
  }
}

export default InputView;
