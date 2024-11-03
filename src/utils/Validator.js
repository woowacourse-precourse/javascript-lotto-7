import ERROR_MESSAGES from '../consts/ErrorMessage.js';

class Validator {
  static validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
    }
    if (
      !numbers.every((num) => Number.isInteger(num) && num >= 1 && num <= 45)
    ) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_RANGE);
    }
  }

  static validateInputLotto(input) {
    const numbers = input.split(',').map((num) => parseInt(num, 10));

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_LENGTH);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
    }

    if (
      !numbers.every((num) => Number.isInteger(num) && num >= 1 && num <= 45)
    ) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_RANGE);
    }
  }

  static validateMoney(money) {
    const parsedMoney = parseInt(money, 10);
    if (
      typeof parsedMoney !== 'number' ||
      parsedMoney <= 0 ||
      parsedMoney % 1000 !== 0
    ) {
      throw new Error(ERROR_MESSAGES.MONEY_INVALID);
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (!/^\d+$/.test(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }
    const parsedBonusNumber = parseInt(bonusNumber, 10);

    if (
      typeof parsedBonusNumber !== 'number' ||
      parsedBonusNumber < 1 ||
      parsedBonusNumber > 45
    ) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }

    if (winningNumbers.includes(parsedBonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default Validator;
