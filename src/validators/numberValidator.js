import { ERORR_MESSAGE } from "../constants/messages.js";

const numberValidator = {
  nan: (number) => {
    if (isNaN(number)) {
      throw new Error(ERORR_MESSAGE.NAN_ERROR);
    }
  },

  negative: (number) => {
    if (number < 1) {
      throw new Error(ERORR_MESSAGE.NEGETIVE_NUM_ERROR);
    }
  },
};

export default numberValidator;
