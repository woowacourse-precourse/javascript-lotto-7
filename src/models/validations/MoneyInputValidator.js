import ERROR_MESSAGES from '../../constants/Constant.js';

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
  if (input % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.MONEY_UNIT);
  }
};

const validateMoney = input => {
  isNumeric(input);
  isEmpty(input);
  isAmountInThousand(input);
};

export default validateMoney;
