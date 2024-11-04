import printMessage from '../../View/OutputView.js';
import ERROR_MESSAGES from '../../Error/Error.js';
import { isNumber } from '../../Util/Regex.js';
import runValidators from '../runValidators.js';
import defaultSettings from '../../Config/DefaultSettings.js';

const { lotteryNumber } = ERROR_MESSAGES;
const { lotto } = defaultSettings;

const validateLength = (input) => {
  const numbers = input.split(',');
  if (numbers.length !== lotto.pickingNumber) {
    printMessage(lotteryNumber.NOT_ENOUGH_ELEMENT);
    return false;
  }
  return true;
};

const validateIsNumber = (input) => {
  const numbers = input.split(',').map((num) => num.trim());
  if (!numbers.every((number) => isNumber.test(number))) {
    printMessage(lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  return true;
};
const validateUniqueNumbers = (input) => {
  const numbers = input.split(',').map((num) => num.trim());
  if (new Set(numbers).size !== lotto.pickingNumber) {
    printMessage(lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
};

const validateRange = (input) => {
  const numbers = input.split(',').map((num) => Number(num.trim()));
  if (
    !numbers.every(
      (number) =>
        number >= lotto.minimumNumber && number <= lotto.maximumNumber,
    )
  ) {
    printMessage(lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    return false;
  }
  return true;
};

export default function validateLottoNumber(input) {
  const validators = [
    validateLength,
    validateIsNumber,
    validateUniqueNumbers,
    validateRange,
  ];

  const isValid = runValidators(input, validators);

  if (isValid) {
    return input.replace(/\s/g, '').split(',').map(Number);
  }
  return false;
}
