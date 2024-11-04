import ERROR from '../constants/error.js';
import CONSTANT from '../constants/costant.js';

function blankValue(num) {
  if (!num || num.trim() === '') {
    throw new Error(ERROR.BLANK);
  }
}

function notInRange(num) {
  if (
    num > CONSTANT.LOTTO_CANSTANT.MAX_LOTTO_NUMBER ||
    num < CONSTANT.LOTTO_CANSTANT.MIN_LOTTO_NUMBER
  ) {
    throw new Error(ERROR.INVALID_RANGE_NUMBER);
  }
}

function invalidValue(num) {
  if (isNaN(num)) {
    throw new Error(ERROR.INVALID_VALUE);
  }
}

function isNotInt(num) {
  if (!Number.isInteger(num)) {
    throw new Error(ERROR.IS_NOT_INT);
  }
}

export default {
  blankValue,
  notInRange,
  invalidValue,
  isNotInt,
};
