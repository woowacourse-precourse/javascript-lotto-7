import { ERROR_MESSAGE, LOTTO_INFO } from '../constant/index.js';

const validateFirstInput = (input) => {
  if (!input) {
    throw new Error(ERROR_MESSAGE.EMPTY);
  }
};

export const validateInputMoney = (money) => {
  validateFirstInput(money);

  if (Number.isNaN(Number(money))) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  }

  if (Number(money) % LOTTO_INFO.PRICE) {
    throw new Error(ERROR_MESSAGE.NOT_DIVIDED_NUMBER);
  }
};

export const validateLottoNumbers = (numbers) => {
  if (numbers.length !== LOTTO_INFO.LENGTH) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_LENGTH);
  }

  if (numbers.length !== new Set(numbers).size) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_DUPLICATION);
  }

  if (numbers.some((num) => num < LOTTO_INFO.MIN_RANGE_NUM || num > LOTTO_INFO.MAX_RANGE_NUM)) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_RANGE);
  }

  if (numbers.some((num) => Number.isNaN(Number(num)))) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_TYPE);
  }

  if (numbers.some((num) => !Number.isInteger(Number(num)))) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_INTEGER);
  }

  if (numbers.some((num) => !/^[0-9]+$/.test(String(num)))) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_TYPE);
  }
};
