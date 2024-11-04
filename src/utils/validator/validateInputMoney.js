import INPUTMONEYERROR from '../../resources/INPUTMONEYERROR.js';
import REGEX from '../../resources/REGEX.js';
import RULES from '../../resources/RULES.js';

export default (inputMoney) => {
  if (inputMoney === '') {
    throw new Error(INPUTMONEYERROR.NOT_TYPED);
  }
  if (!inputMoney.match(REGEX.ONLY_INTEGER)) {
    throw new Error(INPUTMONEYERROR.CONTAIN_NAN);
  }
  if (inputMoney.match(REGEX.STARTSWITH_ZERO)) {
    throw new Error(INPUTMONEYERROR.STARTSWITH_ZERO);
  }
  if (Number(inputMoney) % RULES.LOTTO_PRICE !== 0) {
    throw new Error(INPUTMONEYERROR.REMAINDER_NOT_ZERO);
  }
};
