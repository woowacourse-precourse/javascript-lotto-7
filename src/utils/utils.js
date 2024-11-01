import MESSAGES from '../constants/messages.js';

const utils = {
  convertNumberFormat(format, options) {
    const numberFormat = new Intl.NumberFormat('ko-KR', options).format(format);

    return numberFormat;
  },

  validateEmpty(input) {
    if (input.length === 0) {
      throw new Error(MESSAGES.empty);
    }
  },
};

export default utils;
