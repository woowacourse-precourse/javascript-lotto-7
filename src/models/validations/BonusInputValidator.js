import ERROR_MESSAGES from '../../constants/Constant.js';
import { LOTTO } from '../../constants/MagicNumber.js';

const isNumeric = input => {
  if (Number.isNaN(Number(input))) {
    throw new Error(ERROR_MESSAGES.BONUS_INVALID);
  }
};
const isEmpty = input => {
  if (input.length === 0) {
    throw new Error(ERROR_MESSAGES.LOTTO_EMPTY);
  }
};
const rangeOver = input => {
  if (input < LOTTO.LOTTO_MIN || input > LOTTO.LOTTO_MAX) {
    throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
  }
};

const isDuplicate = (input, winning) => {
  if (winning.includes(input)) {
    throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
  }
};

const validateBonus = (input, winning) => {
  isNumeric(input);
  isEmpty(input);
  rangeOver(input);
  isDuplicate(input, winning);
};

export default validateBonus;
