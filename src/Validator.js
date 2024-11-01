import { errorMessage } from './constant/errorMessage.js';
import { regex } from './constant/regex.js';

export function validateAmount(input) {
  const amount = parseInt(input.trim(), 10);

  if (amount != input.trim())
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidAmount}`);

  if (!amount && amount !== 0)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidAmount}`);

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

export function validateNumbers(input) {
  const numbers = input.trim();

  if (!regex.number.test(numbers))
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumber}`);

  return numbers;
}

export function validateBonusNumber(input) {
  const bonusNumber = parseInt(input.trim(), 10);

  if (bonusNumber != input.trim())
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidBonusNumber}`);

  if (!bonusNumber && bonusNumber !== 0)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidBonusNumber}`);

  if (bonusNumber < 1 || bonusNumber > 45)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumber}`);

  return bonusNumber;
}
