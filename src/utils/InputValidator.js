import MESSAGES from '../constants/Message.js';

const InputValidator = {
  isEmpty: (input) => {
    if (input === null || input.trim().length === 0 || !input) {
      throw new Error(MESSAGES.ERROR.IS_EMPTY);
    }
  },
  isNumber: (input) => {
    if (isNaN(Number(input))) {
      throw new Error(MESSAGES.ERROR.NOT_NUMBER);
    }
  },
  isMaxAmount: (input) => {
    if (input > 1000000000) {
      throw new Error(MESSAGES.ERROR.IS_MAX_AMOUNT);
    }
  },
  isNaturalNumber: (input) => {
    if (!Number.isInteger(input) || Number(input) <= 0) {
      throw new Error(MESSAGES.ERROR.NOT_NATURAL_NUMBER);
    }
  },
  isDivisibleByThousand: (input) => {
    if (input % 1000 !== 0) {
      throw new Error(MESSAGES.ERROR.NOT_DIVISIBLE_BY_THOUSAND);
    }
  },
  isLottoRangeNumber: (input) => {
    if (input < 1 || input > 45) {
      throw new Error(MESSAGES.ERROR.NOT_LOTTO_RANGE);
    }
  },
  isWinningLength: (inputArray) => {
    if (inputArray.length !== 6) {
      throw new Error(MESSAGES.ERROR.NOT_WINNING_LENGTH);
    }
  },
  isSameNumber: (inputArray) => {
    const distinctNumber = new Set(inputArray);
    if (distinctNumber.size !== inputArray.length) {
      throw new Error(MESSAGES.ERROR.IS_SAME_NUMBER);
    }
  },
  isSameBonusNumber: (input, inputArray) => {
    const distinctNumber = new Set([...inputArray, input]);
    if (distinctNumber.size !== inputArray.length + 1) {
      throw new Error(MESSAGES.ERROR.IS_SAME_BONUS_NUMBER);
    }
  },
};

export default InputValidator;
