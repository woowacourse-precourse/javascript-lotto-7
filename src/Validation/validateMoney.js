import { printMessage } from '../View/OutputView.js';
import { isNumber } from '../Util/Regex.js';
import { ERROR_MESSAGES } from '../Error.js';

export function validateMoney(input) {
  if (!isNumber.test(input)) {
    printMessage(ERROR_MESSAGES.money.INVALID_INPUT_MONEY);
    return false;
  }

  const rounds = Number(input);
  // 유효성 검사
  if (rounds === 0) {
    printMessage(ERROR_MESSAGES.money.ZERO_MONEY_NOT_ALLOWED);
    return false;
  }
  if (rounds < 0) {
    printMessage(ERROR_MESSAGES.money.ONLY_POSITIVE_ALLOWED);
    return false;
  }
  if (rounds % 1000 !== 0) {
    printMessage(ERROR_MESSAGES.money.ONLY_NOTE_ALLOWED);
    return false;
  }

  return rounds;
}
