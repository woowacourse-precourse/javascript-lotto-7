import { ERROR_MESSAGES, throwError } from "../Error/Error.js";

// 입력값이 6개의 숫자인지 확인
function checkNumberCount(numbers) {
  if (numbers.length !== 6) {
    throwError(ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS);
  }
}

// 모든 값이 숫자인지 확인
function checkAllNumbers(numbers) {
  numbers.forEach((num) => {
    if (isNaN(num)) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
    }
  });
}

// 숫자 범위 (1~45) 내에 있는지 확인
function checkNumberRange(numbers) {
  numbers.forEach((number) => {
    if (number < 1 || number > 45) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    }
  });
}

// 중복된 숫자가 있는지 확인
function checkForDuplicates(numbers) {
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throwError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
  }
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
