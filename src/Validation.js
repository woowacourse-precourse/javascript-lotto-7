import {
  BASIC_ERROR,
  WINNING_NUMBER_ERROR,
  BONUS_NUMBER_ERROR,
} from './Constants/Message.js';
import {
  LOTTO_PRICE_UNIT,
  LOTTO_NUMBER_STANDARD,
  PURCHASE_MONEY_INITIAL_VALUE,
} from './Constants/Constant.js';

class basicValidation {
  static validateInputBlank(input) {
    if (input === '') {
      throw new Error(BASIC_ERROR.null);
    }
  }

  static validateInputNumberType(input) {
    if (Number.isNaN(input)) {
      throw new Error(BASIC_ERROR.invalidType);
    }
  }

  static validateInputPossiblePurchase(input) {
    if (input <= PURCHASE_MONEY_INITIAL_VALUE) {
      throw new Error(BASIC_ERROR.invalidPossiblePurchase);
    }
  }

  static validatePurchaseUnit(input) {
    if (input % LOTTO_PRICE_UNIT !== 0) {
      throw new Error(BASIC_ERROR.invalidMoney);
    }
  }

  static validateInputLength(input, count) {
    if (input.length !== count) {
      throw new Error(BASIC_ERROR.invalidLength(count));
    }
  }
}

class winningNumberValidation {
  static validateInputSeparator(input) {
    if (!input.includes(LOTTO_NUMBER_STANDARD.separator)) {
      throw new Error(WINNING_NUMBER_ERROR.invalidSeparator);
    }
  }

  static validateInputLottoRange(input) {
    if (
      input < LOTTO_NUMBER_STANDARD.min ||
      input > LOTTO_NUMBER_STANDARD.max
    ) {
      throw new Error(BASIC_ERROR.invalidNumber);
    }
  }

  static validateInputOverlap(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(WINNING_NUMBER_ERROR.overlap);
    }
  }
}

class bonusNumberValidation {
  static validateInputOverlap(input, winningNumbers) {
    if (winningNumbers.includes(input)) {
      throw new Error(BONUS_NUMBER_ERROR.overlapBonus);
    }
  }
}

export { basicValidation, winningNumberValidation, bonusNumberValidation };
