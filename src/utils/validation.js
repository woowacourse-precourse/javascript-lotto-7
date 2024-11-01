import { ERROR_MESSAGES } from '../constant/constants.js';

export const validateMoney = (inputMoney) => {
  const money = Number(inputMoney);

  checkNumber(money);
  checkUnit(money);
};

const checkNumber = (money) => {
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER);
  }
};

const checkUnit = (money) => {
  if (money % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT);
  }
};
