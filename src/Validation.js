import {
  BASIC_ERROR,
  WINNING_NUMBER_ERROR,
  BOUNS_NUMBER_ERROR,
} from './Constants/Message.js';
import {
  LOTTO_PRICE_UNIT,
  LOTTO_NUMBER_STANDARD,
} from './Constants/Constant.js';

class BasicValidation {
  InputBlank(input) {
    if (input === '') {
      throw new Error(BASIC_ERROR.null);
    }
  }

  InputNumberType(input) {
    if (Number.isNaN(input)) {
      throw new Error(BASIC_ERROR.invalidType);
    }
  }

  PurchaseUnit(input) {
    if (input % LOTTO_PRICE_UNIT !== 0) {
      throw new Error(BASIC_ERROR.invalidMoney);
    }
  }

  InputLength(input, count) {
    if (input.length !== count) {
      throw new Error(BASIC_ERROR.invalidLength(count));
    }
  }
}

class WinningNumberValidation {
  InputSeparator(input) {
    if (!input.includes(LOTTO_NUMBER_STANDARD.separator)) {
      throw new Error(WINNING_NUMBER_ERROR.invalidSeparator);
    }
  }

  InputLottoRange(input) {
    if (
      input < LOTTO_NUMBER_STANDARD.min ||
      input > LOTTO_NUMBER_STANDARD.max
    ) {
      throw new Error(BASIC_ERROR.invalidNumber);
    }
  }

  InputOverlap(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(WINNING_NUMBER_ERROR.overlap);
    }
  }
}

class BonusNumberValidation {
  InputOverlap(input, winningNumbers) {
    if (winningNumbers.includes(input)) {
      throw new Error(BOUNS_NUMBER_ERROR.overlapBonus);
    }
  }
}

export { BasicValidation, WinningNumberValidation, BonusNumberValidation };
