import ERROR_MESSAGES from '../../constants/Constant.js';
import { LOTTO } from '../../constants/MagicNumber.js';

const isNumeric = input => {
  if (Number.isNaN(Number(input))) {
    throw new Error(ERROR_MESSAGES.MONEY_INVALID);
  }
};

const isEmpty = input => {
  if (input.length === 0) {
    throw new Error(ERROR_MESSAGES.MONEY_EMPTY);
  }
};

const isAmountInThousand = input => {
  if (input % LOTTO.PURCHASE_UNIT !== 0) {
    throw new Error(ERROR_MESSAGES.MONEY_UNIT);
  }
};

const validateMoney = input => {
  isNumeric(input);
  isEmpty(input);
  isAmountInThousand(input);
};

export default validateMoney;
