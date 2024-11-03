import constants from '../constants/constants.js';

const { LOTTO, ERROR } = constants;

class Validator {
  static cashValidation(string) {
    if (!/^\d+$/.test(string)) {
      throw new Error(ERROR.NUMBER.FORMAT);
    }

    const number = Number(string);

    if (number <= 0) {
      throw new Error(ERROR.NUMBER.POSITIVE);
    }

    if (number % LOTTO.PRICE !== 0) {
      throw new Error(ERROR.NUMBER.UNIT);
    }
  }

  static printedLottoValidation(lotto) {
    if (lotto.length !== LOTTO.NUMBER.LENGTH) {
      throw new Error(ERROR.LOTTO.LENGTH);
    }
    if (new Set(lotto).size !== LOTTO.NUMBER.LENGTH) {
      throw new Error(ERROR.LOTTO.DUPLICATE);
    }
    if (
      !lotto.every(num => num >= LOTTO.NUMBER.MIN && num <= LOTTO.NUMBER.MAX)
    ) {
      throw new Error(ERROR.LOTTO.RANGE);
    }
  }

  static targetLottoValidation(string) {
    const lotto = string.split(',');
    const isValidNumber = num =>
      num >= LOTTO.NUMBER.MIN && num <= LOTTO.NUMBER.MAX;

    if (!string.includes(',')) throw new Error(ERROR.LOTTO.COMMA);
    if (lotto.length !== LOTTO.NUMBER.LENGTH)
      throw new Error(ERROR.LOTTO.LENGTH);
    if (new Set(lotto).size !== LOTTO.NUMBER.LENGTH)
      throw new Error(ERROR.LOTTO.DUPLICATE);
    if (!lotto.every(isValidNumber)) throw new Error(ERROR.LOTTO.RANGE);
  }

  static bonusNumberValidation(string, targetLotto) {
    if (!/^\d+$/.test(string)) {
      throw new Error(ERROR.NUMBER.FORMAT);
    }
    const number = Number(string);

    if (number <= 0) {
      throw new Error(ERROR.NUMBER.POSITIVE);
    }
    if (number < LOTTO.NUMBER.MIN || number > LOTTO.NUMBER.MAX) {
      throw new Error(ERROR.LOTTO.RANGE);
    }

    if (targetLotto.includes(number)) {
      throw new Error(ERROR.LOTTO.BONUS_DUPLICATE);
    }
  }
}

export default Validator;
