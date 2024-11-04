import LOTTO from "../constants/lotto.js";
import { ERORR_MESSAGE } from "../constants/messages.js";

const arrayValidator = {
  inRange: (array) => {
    const nanValidator = array.some((number) => isNaN(number));
    const nonNegativeValidator = array.some((number) => number < 1);
    const integerValidator = array.some((number) => !Number.isInteger(number));
    const maxNumberValidator = array.some((num) => num > LOTTO.MAX_NUMBER);
    if (nanValidator) {
      throw new Error(ERORR_MESSAGE.NAN_ERROR);
    }

    if (nonNegativeValidator) {
      throw new Error(ERORR_MESSAGE.NEGETIVE_NUM_ERROR);
    }

    if (integerValidator) {
      throw new Error(ERORR_MESSAGE.INTEGER_ERROR);
    }

    if (maxNumberValidator) {
      throw new Error(ERORR_MESSAGE.LIMIT_NUM_ERROR);
    }
  },

  length: (arr) => {
    if (arr.length !== LOTTO.NUMBERS_COUNT) {
      throw new Error(ERORR_MESSAGE.WINNING_LOTTO_LENGTH_ERROR);
    }
  },

  duplicate: (array) => {
    const validator = new Set(array);

    if (validator.size !== array.length) {
      throw new Error(ERORR_MESSAGE.DUPLICATE_NUMBER_ERROR);
    }
  },

  containNum: (array, number) => {
    if (array.includes(number)) {
      throw new Error(ERORR_MESSAGE.CONTAIN_ERROR);
    }
  },
};

export default arrayValidator;
