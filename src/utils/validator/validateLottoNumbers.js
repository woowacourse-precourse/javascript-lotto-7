import RULES from '../../resources/RULES.js';
import LOTTONUMBERS from '../../resources/ERROR/LOTTONUMBERS.js';

export default (numbers) => {
  if (numbers.length !== RULES.TOTAL_PICK_COUNT) {
    throw new Error(LOTTONUMBERS.NOT_TOTALLY_PICKED);
  }

  if (new Set(numbers).size !== numbers.length) {
    throw new Error(LOTTONUMBERS.DUPLICATED_NUMBER);
  }

  if (
    !numbers.every(
      (number) =>
        number >= RULES.PICK_RANGE_START && number <= RULES.PICK_RANGE_END,
    )
  ) {
    throw new Error(LOTTONUMBERS.OVER_NUMBER_RANGE);
  }
};
