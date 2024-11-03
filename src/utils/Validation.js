import { UNIT, ERROR, FORMAT } from '../constants/Constants.js';

const Validators = {
  checkNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR.NON_NUMBER);
    }
  },

  checkInteger(number) {
    if (!FORMAT.NUMBER.test(number)) {
      throw new Error(ERROR.NON_INTEGER);
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

  checkBonus(array, number) {
    if (array.includes(number)) {
      throw new Error(ERROR.BONUS_REPEAT);
    }
  },
};

export default Validators;
