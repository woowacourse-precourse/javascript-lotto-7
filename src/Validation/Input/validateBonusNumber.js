import printMessage from '../../View/OutputView.js';
import ERROR_MESSAGES from '../../Error/Error.js';
import { isNumber } from '../../Util/Regex.js';
import runValidators from '../runValidators.js';
import defaultSettings from '../../Config/DefaultSettings.js';

const { lotteryNumber } = ERROR_MESSAGES;
const { lotto } = defaultSettings;

const validateIsNumber = (input) => {
  if (!isNumber.test(input)) {
    printMessage(lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  return true;
};

const validateRange = (input) => {
  const number = Number(input);
  if (number < lotto.minimumNumber || number > lotto.maximumNumber) {
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
  const initialValidators = [validateIsNumber, validateRange];

  const isInitialValid = runValidators(input, initialValidators);

  if (!isInitialValid) return false;

  const parsedNumber = Number(input);

  if (!validateDuplicate(parsedNumber, lottoNumbers)) {
    return false;
  }

  return parsedNumber;
}
