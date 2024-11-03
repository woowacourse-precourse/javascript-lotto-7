import { UTILS } from './Constants.js';

const Utils = {
  parsingToNumber: (input) => {
    if (input === null || input === '') {
      return NaN;
    }

    return Number(input);
  },

  parsingToArray: (input) => input.split(UTILS.separator),
};

export default Utils;
