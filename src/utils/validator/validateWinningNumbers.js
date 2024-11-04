import WINNINGNUMBERSERROR from '../../resources/WINNINGNUMBERSERROR.js';
import REGEX from '../../resources/REGEX.js';
import RULES from '../../resources/RULES.js';

export default (winningNumbers) => {
  if (winningNumbers === '') {
    throw new Error(WINNINGNUMBERSERROR.NOT_TYPED);
  }
  if (!winningNumbers.match(REGEX.VALID_DELIMITER_SPLIT)) {
    throw new Error(WINNINGNUMBERSERROR.INVALID_DELIMITER_SPLIT);
  }
  winningNumbers
    .split(RULES.DELIMITER_WINNING_NUMBERS)
    .map(Number)
    .forEach((element) => {
      if (element < RULES.PICK_RANGE_START || element > RULES.PICK_RANGE_END) {
        throw new Error(WINNINGNUMBERSERROR.OVER_NUMBER_RANGE);
      }
    });
};
