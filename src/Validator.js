import { errorMessage } from './constant/errorMessage.js';
import { regex } from './constant/regex.js';

export function validateAmount(input) {
  const amount = parseInt(input.trim(), 10);

  if (!amount) throw new Error(`${errorMessage.prefix} ${errorMessage.invalidAmount}`);

  if (!isValidAmount(amount))
    throw new Error(`${errorMessage.prefix} ${errorMessage.negativeAmount}`);

  if (!isDivisibleAmount(amount))
    throw new Error(`${errorMessage.prefix} ${errorMessage.divisibleAmount}`);

  return amount;
}

function isValidAmount(amount) {
  return amount > 0;
}

function isDivisibleAmount(amount) {
  return amount % 1000 === 0;
}
