import { printMessage } from '../View/OutputView.js';
import { ERROR_MESSAGES } from '../Error.js';
import { isNumber } from '../Util/Regex.js';
import runValidators from './runValidators.js';

const { lotteryNumber } = ERROR_MESSAGES;

const validateIsNumber = (bonusNumber) => {
  if (!isNumber.test(bonusNumber)) {
    printMessage(lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  return true;
};

const validateRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    printMessage(lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    return false;
  }
  return true;
};

const validateDuplicate = (bonusNumber, lottoNumbers) => {
  if (lottoNumbers.includes(bonusNumber)) {
    printMessage(lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
};

export default function validateBonusNumber(input, lottoNumbers) {
  const parsedNumber = Number(input);
  const validators = [
    (num) => validateIsNumber(num),
    (num) => validateRange(num),
    (num) => validateDuplicate(num, lottoNumbers),
  ];

  const isValid = runValidators(parsedNumber, validators);

  if (isValid) {
    return parsedNumber;
  }
  return false;
}
