import { errorMessage } from '../constant/errorMessage.js';
import { regex } from '../constant/regex.js';
import { checkDuplication } from './checkDuplication.js';
import { checkNumbersRange } from './checkNumbersRange.js';

export function validateAmount(input) {
  const amount = parseInt(input.trim());

  if (!amount && amount !== 0)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidAmount}`);

  if (amount != input.trim())
    throw new Error(`${errorMessage.prefix} ${errorMessage.notIntegerAmount}`);

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
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidLotto}`);

  const numbersArray = numbers.split(',').map((number) => parseInt(number));

  if (numbersArray.length !== 6) {
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidLotto}`);
  }

  if (checkDuplication(numbersArray)) {
    throw new Error(`${errorMessage.prefix} ${errorMessage.duplicatedNumber}`);
  }

  if (!checkNumbersRange(numbersArray)) {
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumberRange}`);
  }

  return numbersArray;
}

export function validateBonusNumber(input) {
  const bonusNumber = parseInt(input.trim());

  if (bonusNumber != input.trim())
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidBonusNumber}`);

  if (!bonusNumber && bonusNumber !== 0)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidBonusNumber}`);

  if (bonusNumber < 1 || bonusNumber > 45)
    throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumberRange}`);

  return bonusNumber;
}
