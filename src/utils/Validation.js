import { UNIT, ERROR } from '../constants/Constants.js';

export function validateCost(cost) {
  if (isNaN(Number(cost))) {
    throw new Error(ERROR.COST_TYPE);
  }

  if (Number(cost) % UNIT.TICKET_PRICE !== 0) {
    throw new Error(ERROR.COST_UNIT);
  }
}

export function validateLotto(numbers) {
  const checkSet = new Set();
  numbers.forEach((num) => {
    if (checkSet.has(num)) {
      throw new Error(ERROR.LOTTO_REPEAT);
    }
    checkSet.add(num);
  });
}
