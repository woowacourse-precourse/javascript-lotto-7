import ERROR from '../constants/errors.js';
import { LOTTO } from '../constants/lotto.js';
import { numericStringRegex } from '../utils/regex.js';

const parseArray = (arrayString, separator) => arrayString.split(separator);

export const parseNumber = (numberstring) => {
  if(numericStringRegex.test(numberstring.trim())) {
    return Number(numberstring.trim());
  }
  throw new Error(ERROR.HAS_UN_NUMERIC_CHARACTER);
};

export const parseWinnnngLotto = (input) => parseArray(input, LOTTO.SEPARATOR).map(parseNumber);

