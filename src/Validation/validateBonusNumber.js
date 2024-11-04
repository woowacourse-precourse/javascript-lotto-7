import { printError } from "../View/output.js";
import { ERROR_MESSAGES, throwError } from "../Error/Error.js";

// 숫자가 1~45 범위 내에 있는지 확인
function checkBonusNumberRange(bonusNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) {
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
}

// 보너스 번호가 당첨 번호와 중복되는지 확인
function checkBonusNotDuplicated(bonusNumber, winningNumbers) {
  if (!Array.isArray(winningNumbers)) {
    printError(ERROR_MESSAGES.lotteryNumber.INVALID_ARRAY);
    return false;
  }
  return true;

  if (winningNumbers.includes(bonusNumber)) {
    printError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
}

// 보너스 번호 유효성 검사 함수
function validateBonusNumber(bonusNumber, winningNumbers) {
  // 숫자인지 확인
  checkBonusIsNumber(bonusNumber);

  // 숫자를 정수로 변환
  const parsedBonusNumber = parseInt(bonusNumber, 10);

  // 범위와 중복 검사
  checkBonusNumberRange(parsedBonusNumber);
  checkBonusNotDuplicated(parsedBonusNumber, winningNumbers);

  return parsedBonusNumber; // 유효한 경우 보너스 번호 반환
}

export { validateBonusNumber };
