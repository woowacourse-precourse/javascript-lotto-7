import MESSAGES from '../constants/messages.js';
import VALUES from '../constants/values.js';

const utils = {
  sortRandoms(randoms) {
    return randoms.sort((first, later) => first - later);
  },

  convertNumberFormat(format, options) {
    const numberFormat = new Intl.NumberFormat('ko-KR', options).format(format);

    return numberFormat;
  },

  validateEmpty(input) {
    if (input.length === 0) {
      throw new Error(MESSAGES.empty);
    }
  },

  validateNumber(paymentInput) {
    if (VALUES.format.notNumber.test(paymentInput)) {
      throw new Error(MESSAGES.notNumber);
    }
  },

  validateSafeInteger(number) {
    if (!Number.isSafeInteger(number)) {
      throw new Error(MESSAGES.notInteger);
    }
  },

  validateRange(number) {
    const { start, end } = VALUES.range;

    if (number < start || number > end) {
      throw new Error(MESSAGES.range);
    }
  },
};

export default utils;
