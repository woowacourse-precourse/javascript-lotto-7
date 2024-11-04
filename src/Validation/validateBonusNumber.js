import { printError } from "../View/output.js";
import { ERROR_MESSAGES } from "../Error/Error.js";

// 숫자가 1~45 범위 내에 있는지 확인
function checkBonusNumberRange(bonusNumber) {
  if (bonusNumber <= 0 || bonusNumber > 45) {
    printError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    return false;
  }
  return true;
}

// 보너스 번호가 숫자인지 확인
function checkBonusIsNumber(bonusNumber) {
  if (isNaN(bonusNumber)) {
    printError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
    return false;
  }
  return true;
}

// 보너스 번호가 당첨 번호와 중복되는지 확인
function checkBonusNotDuplicated(bonusNumber, winningNumbers) {
  if (!Array.isArray(winningNumbers)) {
    printError(ERROR_MESSAGES.lotteryNumber.INVALID_ARRAY);
    return false;
  }

  if (winningNumbers.includes(bonusNumber)) {
    printError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
}

// 보너스 번호 유효성 검사 함수
function validateBonusNumber(bonusNumber, winningNumbers) {
  if (!checkBonusIsNumber(bonusNumber)) return false;

  const parsedBonusNumber = parseInt(bonusNumber, 10);

  if (!checkBonusNumberRange(parsedBonusNumber)) return false;
  if (!checkBonusNotDuplicated(parsedBonusNumber, winningNumbers)) return false;

  return parsedBonusNumber;
}

export { validateBonusNumber };
