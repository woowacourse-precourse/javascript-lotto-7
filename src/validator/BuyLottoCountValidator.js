import { MESSAGES, NUMBERS } from '../constants/Constants.js';

class BuyLottoCountValidator {
  static validateBuyLottoCount(buyLottoCount) {
    this.isCharacter(buyLottoCount);
    this.isMultipleOfThousand(buyLottoCount);
    this.isNegative(buyLottoCount);
    this.isOverMaxNumber(buyLottoCount);
    this.isSpace(buyLottoCount);
  }

  static isCharacter(buyLottoCount) {
    if (isNaN(buyLottoCount)) {
      throw new Error(`${MESSAGES.ERROR.BUY_LOTTO_COUNT.INVALID_CHARACTER}\n`);
    }
  }

  static isMultipleOfThousand(buyLottoCount) {
    if (buyLottoCount % NUMBERS.DIVIED_NUMBER !== 0 || buyLottoCount === '0') {
      throw new Error(`${MESSAGES.ERROR.BUY_LOTTO_COUNT.INVALID_UNIT}\n`);
    }
  }

  static isNegative(buyLottoCount) {
    if (buyLottoCount < 0) {
      throw new Error(`${MESSAGES.ERROR.BUY_LOTTO_COUNT.INVALID_SIGN}\n`);
    }
  }

  static isOverMaxNumber(buyLottoCount) {
    const MAX_NUM = Number.MAX_VALUE;

    if (buyLottoCount > MAX_NUM) {
      throw new Error(`${MESSAGES.ERROR.BUY_LOTTO_COUNT.INVALID_RANGE}\n`);
    }
  }

  static isSpace(buyLottoCount) {
    if (buyLottoCount === '') {
      throw new Error(`${MESSAGES.ERROR.BUY_LOTTO_COUNT.INVALID_SPACE}\n`);
    }
  }
}

export default BuyLottoCountValidator;
