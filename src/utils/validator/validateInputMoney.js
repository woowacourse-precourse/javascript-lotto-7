import INPUTMONEY from '../../resources/ERROR/INPUTMONEY.js';
import REGEX from '../../resources/REGEX.js';
import RULES from '../../resources/RULES.js';

export default (inputMoney) => {
  if (inputMoney === '') {
    throw new Error(INPUTMONEY.NOT_TYPED);
  }
  if (!inputMoney.match(REGEX.ONLY_INTEGER)) {
    throw new Error(INPUTMONEY.CONTAIN_NAN);
  }
  if (inputMoney.match(REGEX.STARTSWITH_ZERO)) {
    throw new Error(INPUTMONEY.STARTSWITH_ZERO);
  }
  if (Number(inputMoney) % RULES.LOTTO_PRICE !== 0) {
    throw new Error(INPUTMONEY.REMAINDER_NOT_ZERO);
  }
};
