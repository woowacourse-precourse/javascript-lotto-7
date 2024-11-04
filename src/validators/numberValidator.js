import LOTTO from "../constants/lotto.js";
import { ERORR_MESSAGE } from "../constants/messages.js";

const numberValidator = {
  nan: (number) => {
    if (typeof number !== "number" || Number.isNaN(number)) {
      throw new Error(ERORR_MESSAGE.NAN_ERROR);
    }
  },

  negative: (number) => {
    if (number < 1) {
      throw new Error(ERORR_MESSAGE.NEGETIVE_NUM_ERROR);
    }
  },

  integer: (number) => {
    if (!Number.isInteger(number)) {
      throw new Error(ERORR_MESSAGE.INTEGER_ERROR);
    }
  },

  max: (number) => {
    if (number > LOTTO.MAX_NUMBER) {
      throw new Error(ERORR_MESSAGE.LIMIT_NUM_ERROR);
    }
  },
};

export default numberValidator;
