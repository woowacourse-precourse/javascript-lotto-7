import { UNIT, ERROR } from '../constants/Constants.js';

export function validateCost(cost) {
  const numberCost = Number(cost);

  if (isNaN(numberCost)) {
    throw new Error(ERROR.COST_TYPE);
  }

  if (!Number.isInteger(numberCost)) {
    throw new Error(ERROR.COST_UNIT);
  }

  if (numberCost % UNIT.TICKET_PRICE !== 0) {
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
