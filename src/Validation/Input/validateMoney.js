import { isNumber } from '../../Util/Regex.js';
import ERROR_MESSAGES from '../../Error/Error.js';
import runValidators from '../runValidators.js';
import defaultSettings from '../../Config/DefaultSettings.js';
import printMessage from '../../View/OutputView.js';

const { lotto } = defaultSettings;
const validateIsNumber = (input) => {
  if (!isNumber.test(input)) {
    printMessage(ERROR_MESSAGES.money.INVALID_INPUT_MONEY);
    return false;
  }
  return true;
};

const validateNonZero = (input) => {
  if (Number(input) === 0) {
    printMessage(ERROR_MESSAGES.money.ZERO_MONEY_NOT_ALLOWED);
    return false;
  }
  return true;
};

const validatePositive = (input) => {
  if (Number(input) < 0) {
    printMessage(ERROR_MESSAGES.money.ONLY_POSITIVE_ALLOWED);
    return false;
  }
  return true;
};
const validateDivisibleByThousand = (input) => {
  if (Number(input) % lotto.price !== 0) {
    printMessage(ERROR_MESSAGES.money.ONLY_NOTE_ALLOWED);
    return false;
  }
  return true;
};

export default function validateMoney(input) {
  const validators = [
    validateIsNumber,
    validateNonZero,
    validatePositive,
    validateDivisibleByThousand,
  ];

  const isValid = runValidators(input, validators);

  if (isValid) {
    return Number(input);
  }
  return false;
}
