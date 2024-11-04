import { ERROR } from "./constants.js";

const validator = {
  lottoNumber(number) {
    if (number === "") {
      throw new Error(ERROR.LOTTO.EMPTY_NUMBER);
    }
    if (isNaN(number)) {
      throw new Error(ERROR.LOTTO.INVALID_NUMBER);
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error(ERROR.LOTTO.NOT_INTEGER);
    }
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR.LOTTO.INVALID_RANGE);
    }
  },

  lottoNumberArray(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_ARRAY.INVALID_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.LOTTO_ARRAY.DUPLICATE_NUMBER);
    }
  },

  money(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.MONEY.INVALID_NUMBER);
    }
    if (input === "") {
      throw new Error(ERROR.MONEY.EMPTY_NUMBER);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR.MONEY.INVALID_UNIT);
    }
  },
};

export default validator;
