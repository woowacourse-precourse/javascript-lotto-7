import { UNIT, ERROR, FORMAT } from '../constants/Constants.js';

const Validators = {
  checkNumber(number) {
    if (!FORMAT.NUMBER.test(number)) {
      throw new Error(ERROR.NON_NUMBER);
    }
  },

  checkCost(cost) {
    if (Number(cost) % UNIT.TICKET_PRICE !== 0) {
      throw new Error(ERROR.COST_UNIT);
    }
  },

  checkRange(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  },

  checkLotto(numbers) {
    const checkSet = new Set();
    numbers.forEach((num) => {
      if (checkSet.has(num)) {
        throw new Error(ERROR.LOTTO_REPEAT);
      }
      checkSet.add(num);
    });
  },
};

export default Validators;
