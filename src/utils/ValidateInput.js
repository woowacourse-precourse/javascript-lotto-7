import ValidateMessage from "../messages/ValidateMessage.js";

class ValidateInput {
  static validateNaturalNumber(number, subject) {
    if (isNaN(number) || number < ValidateMessage.MIN_WINNING_NUMBER || number % 1 !== 0) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.NATURAL_NUMBER(subject));
    }
  }

  static validatePrice(price) {
    ValidateInput.validateNaturalNumber(price, "구입 금액은");

    if (price < 1000) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.MIN_PRICE);
    }

    if (price > 1000 && price % 1000 !== 0) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.PRICE_UNIT);
    }
  }

  static validateWinningNumber(numbers) {
    const subject = "당첨 번호는";
    if (numbers.length !== 6) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.WINNING_NUMBER_COUNT);
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.DUPLICATE_NUMBER);
    }

    numbers.forEach((number) => {
      ValidateInput.validateNaturalNumber(number, subject);
    });

    if (
      numbers.some(
        (number) => number < ValidateMessage.MIN_WINNING_NUMBER || number > ValidateMessage.MAX_WINNING_NUMBER
      )
    ) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.OUT_OF_RANGE(subject));
    }
  }

  static validateBonusNumber(number, winningNumber) {
    const subject = "보너스 번호는";
    ValidateInput.validateNaturalNumber(number, subject);

    if (number < ValidateMessage.MIN_WINNING_NUMBER || number > ValidateMessage.MAX_WINNING_NUMBER) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.OUT_OF_RANGE(subject));
    }

    if (winningNumber.some((item) => item === number)) {
      throw new Error(ValidateMessage.INPUT_ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default ValidateInput;
