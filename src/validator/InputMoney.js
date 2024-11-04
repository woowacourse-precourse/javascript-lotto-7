import { ERROR_MESSAGE } from "../constants/Message";

const validateNumberOnly = (inputMoney) => {
  const reg = /^[0-9]+$/;

  if (!reg.test(inputMoney)) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_MONEY_TYPE);
  }
};

const validatePositiveNum = (inputMoney) => {
  if (inputMoney <= 0) {
    throw new Error(ERROR_MESSAGE.INVALID_POSITIVE_INPUT_MONEY);
  }
};

const validateMoneyUnit = (inputMoney) => {
  const isUnitMoney = inputMoney % 1000 === 0;

  if (!isUnitMoney) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_MONEY_UNIT);
  }
};

export const validateInputMoney = (inputMoney) => {
  validateNumberOnly(inputMoney);
  validatePositiveNum(inputMoney);
  validateMoneyUnit(inputMoney);
};
