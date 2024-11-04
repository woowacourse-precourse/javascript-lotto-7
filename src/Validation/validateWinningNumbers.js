import { printError } from "../View/output.js";
import { ERROR_MESSAGES } from "../Error/Error.js";

// 입력값이 6개의 숫자인지 확인
function checkNumberCount(numbers) {
  if (numbers.length !== 6) {
    printError(ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS);
    return false;
  }
  return true;
}

// 모든 값이 숫자인지 확인
function checkAllNumbers(numbers) {
  numbers.forEach((num) => {
    if (isNaN(num)) {
      printError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
      return false;
    }
    return true;
  });
}

// 숫자 범위 (1~45) 내에 있는지 확인
function checkNumberRange(numbers) {
  numbers.forEach((number) => {
    if (number < 1 || number > 45) {
      printError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
      return false;
    }
    return true;
  });
}

// 중복된 숫자가 있는지 확인
function checkForDuplicates(numbers) {
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    printError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    return false;
  }
  return true;
}

// 유효성 검사 함수
function validateWinningNumbers(input) {
  const numbers = input.split(",").map((num) => num.trim());

  checkNumberCount(numbers);
  checkAllNumbers(numbers);

  const winnigNumbers = numbers.map((num) => parseInt(num, 10));

  checkNumberRange(winnigNumbers);
  checkForDuplicates(winnigNumbers);

  return winnigNumbers;
}

export { validateWinningNumbers };
