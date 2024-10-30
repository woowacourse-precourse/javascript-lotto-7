import { printMessage } from '../View/OutputView.js';
import { isNumber } from '../Util/Regex.js';
import { ERROR_MESSAGES } from '../Error.js';

export function validateMoney(input) {
  if (!isNumber.test(input)) {
    printMessage(ERROR_MESSAGES.money.INVALID_INPUT_MONEY);
    return false;
  }

  const rounds = BigInt(input);
  // 유효성 검사
  if (rounds <= 0n) {
    printMessage(ERROR_MESSAGES.money.ONLY_POSITIVE_ALLOWED);
    return false;
  }
  if (rounds % 1000n !== 0n) {
    printMessage(ERROR_MESSAGES.money.ONLY_NOTE_ALLOWED);
    return false;
  }

  return rounds;
}
