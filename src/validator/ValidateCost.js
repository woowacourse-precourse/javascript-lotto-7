import { ERROR, FORMAT, UNIT } from '../constants/Constants.js';

const ValidateCost = {
  checkNumber(cost) {
    if (Number.isNaN(Number(cost))) {
      throw new Error(ERROR.NON_NUMBER);
    }
  },

  checkInteger(cost) {
    if (!FORMAT.NUMBER.test(cost)) {
      throw new Error(ERROR.NON_INTEGER);
    }
  },

  checkCost(cost) {
    if (Number(cost) % UNIT.TICKET_PRICE !== 0) {
      throw new Error(ERROR.COST_UNIT);
    }
  },
};

export default ValidateCost;
