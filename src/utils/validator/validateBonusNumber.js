import BONUSNUMBER from '../../resources/ERROR/BONUSNUMBER.js';
import REGEX from '../../resources/REGEX.js';
import RULES from '../../resources/RULES.js';

function hasSameNumber(bonusNumber, winningNumbers) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(BONUSNUMBER.PREEMPTED_NUMBER);
  }
}

export default (bonusNumber, winningNumbers) => {
  if (bonusNumber === '') {
    throw new Error(BONUSNUMBER.NOT_TYPED);
  }
  if (!bonusNumber.match(REGEX.ONLY_INTEGER)) {
    throw new Error(BONUSNUMBER.CONTAIN_NAN);
  }
  if (bonusNumber.match(REGEX.STARTSWITH_ZERO)) {
    throw new Error(BONUSNUMBER.STARTSWITH_ZERO);
  }
  if (
    Number(bonusNumber) < RULES.PICK_RANGE_START ||
    Number(bonusNumber) > RULES.PICK_RANGE_END
  ) {
    throw new Error(BONUSNUMBER.OVER_NUMBER_RANGE);
  }
  hasSameNumber(Number(bonusNumber), winningNumbers);
};
