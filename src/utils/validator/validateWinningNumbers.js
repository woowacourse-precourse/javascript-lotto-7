import WINNINGNUMBERS from '../../resources/ERROR/WINNINGNUMBERS.js';
import REGEX from '../../resources/REGEX.js';
import RULES from '../../resources/RULES.js';

export default (winningNumbers) => {
  if (winningNumbers === '') {
    throw new Error(WINNINGNUMBERS.NOT_TYPED);
  }

  if (!winningNumbers.match(REGEX.VALID_DELIMITER_SPLIT)) {
    throw new Error(WINNINGNUMBERS.INVALID_DELIMITER_SPLIT);
  }
  const winningNumbersList = winningNumbers.split(
    RULES.DELIMITER_WINNING_NUMBERS,
  );
  const uniqueNumbers = new Set(winningNumbersList);
  if (uniqueNumbers.size !== winningNumbersList.length) {
    throw new Error(WINNINGNUMBERS.DUPLICATED_NUMBER);
  }
  if (
    !winningNumbersList
      .map(Number)
      .every(
        (number) =>
          number >= RULES.PICK_RANGE_START && number <= RULES.PICK_RANGE_END,
      )
  ) {
    throw new Error(WINNINGNUMBERS.OVER_NUMBER_RANGE);
  }
};
