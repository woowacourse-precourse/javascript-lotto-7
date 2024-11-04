import { ERROR, FORMAT } from '../constants/Constants.js';

const ValidateBonus = {
  checkNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR.NON_NUMBER);
    }
  },

  checkInteger(number) {
    if (!FORMAT.NUMBER.test(number)) {
      throw new Error(ERROR.NON_INTEGER);
    }
  },

  checkRange(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR.BONUS_RANGE);
    }
  },

  checkRepeat(array, number) {
    if (array.includes(number)) {
      throw new Error(ERROR.BONUS_REPEAT);
    }
  },
};

export default ValidateBonus;
