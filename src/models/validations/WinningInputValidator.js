import ERROR_MESSAGES from '../../constants/Constant.js';
import { LOTTO } from '../../constants/MagicNumber.js';

const isNumeric = input => {
  input.forEach(i => {
    if (Number.isNaN(Number(i))) {
      throw new Error(ERROR_MESSAGES.LOTTO_INVALID);
    }
  });
};
const isEmpty = input => {
  if (input[0] === '') {
    throw new Error(ERROR_MESSAGES.LOTTO_EMPTY);
  }
};
const countOver = input => {
  if (input.length !== LOTTO.LOTTO_COUNT) {
    throw new Error(ERROR_MESSAGES.LOTTO_COUNT);
  }
};
const rangeOver = input => {
  input.forEach(i => {
    if (i < LOTTO.LOTTO_MIN || i > LOTTO.LOTTO_MAX) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
  });
};
const isDuplicate = input => {
  const set = [...new Set(input)];
  if (set.length !== input.length) {
    throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
  }
};

const validateWinning = input => {
  isNumeric(input);
  isEmpty(input);
  countOver(input);
  rangeOver(input);
  isDuplicate(input);
};

export default validateWinning;
