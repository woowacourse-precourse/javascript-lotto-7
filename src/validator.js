import { ERROR, LOTTO_RANGE } from "./constants.js";

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
    if (
      Number(number) < LOTTO_RANGE.START ||
      Number(number) > LOTTO_RANGE.END
    ) {
      throw new Error(ERROR.LOTTO.INVALID_RANGE);
    }
  },

  bonusNumber(input, winningNumbers) {
    const number = Number(input);
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR.LOTTO_ARRAY.DUPLICATE_NUMBER);
    }
  },

  lottoNumberArray(numbers) {
    if (numbers.length !== LOTTO_RANGE.COUNT) {
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
    if (input % LOTTO_RANGE.PRICE !== 0) {
      throw new Error(ERROR.MONEY.INVALID_UNIT);
    }
  },
};

export default validator;
