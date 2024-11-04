import { UTILS } from './Constants.js';

const Utils = {
  parsingToNumber: (input) => {
    if (input === UTILS.nullData || input === UTILS.blankString) {
      return NaN;
    }

    return Number(input);
  },

  parsingToArray: (input) => input.split(UTILS.separator),

  trimInput: (input) => {
    if (typeof input === 'string') {
      return input.trim();
    }

    return input;
  },
};

export default Utils;
