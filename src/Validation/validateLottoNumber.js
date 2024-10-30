import { printMessage } from '../View/OutputView.js';
import { ERROR_MESSAGES } from '../Error.js';
import { isNumber } from '../Util/Regex.js';

export default function validateLottoNumber(input) {
  const { lotteryNumber } = ERROR_MESSAGES;
  const parsedInput = input.split(',').map(Number);
  if (parsedInput.length !== 6) {
    printMessage(lotteryNumber.NOT_ENOUGH_ELEMENT);
    return false;
  }
  if (new Set(parsedInput).size !== 6) {
    printMessage(lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  if (!parsedInput.every((number) => isNumber.test(number))) {
    printMessage(lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  if (!parsedInput.every((number) => number >= 1 && number <= 45)) {
    printMessage(lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    return false;
  }

  return parsedInput;
}
