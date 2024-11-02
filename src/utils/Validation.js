import { UNIT, ERROR } from '../constants/Constants.js';

export function validateNumber(number) {
  if (isNaN(Number(number))) {
    throw new Error(ERROR.COST_TYPE);
  }
}

export function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error(ERROR.COST_UNIT);
  }
}

export function validateCost(cost) {
  if (Number(cost) % UNIT.TICKET_PRICE !== 0) {
    throw new Error(ERROR.COST_UNIT);
  }
}

export function validateRange(number) {
  if ((Number(number) < 1) | (Number(number) > 45)) {
    throw new Error(ERROR.LOTTO_RANGE);
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
