import { printMessage } from '../View/OutputView.js';
import { ERROR_MESSAGES } from '../Error.js';
import { isNumber } from '../Util/Regex.js';
import runValidators from './runValidators.js';
import { defaultSettings } from '../DefaultSettings.js';

const { lotteryNumber } = ERROR_MESSAGES;
const { lotto } = defaultSettings;
const validateLength = (input) => {
  if (input.length !== lotto.pickingNumber) {
    printMessage(lotteryNumber.NOT_ENOUGH_ELEMENT);
    return false;
  }
  return true;
};

const validateUniqueNumbers = (input) => {
  if (new Set(input).size !== lotto.pickingNumber) {
    printMessage(lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
};

const validateIsNumber = (input) => {
  if (!input.every((number) => isNumber.test(number))) {
    printMessage(lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  return true;
};

const validateRange = (input) => {
  if (
    !input.every(
      (number) =>
        number >= lotto.minimumNumber && number <= lotto.maximumNumber,
    )
  ) {
    printMessage(lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    return false;
  }
  return true;
};

// Use the reusable validation setup
export default function validateLottoNumber(input) {
  const parsedInput = input.replaceAll(' ', '').split(',').map(Number);
  const validators = [
    validateLength,
    validateUniqueNumbers,
    validateIsNumber,
    validateRange,
  ];

  const isValid = runValidators(parsedInput, validators);

  if (isValid) {
    return parsedInput;
  }
  return false;
}
