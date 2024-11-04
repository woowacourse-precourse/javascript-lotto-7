import { printError } from "../View/output.js";
import { ERROR_MESSAGES } from "../Error/Error.js";

// 입력이 비어있는지 확인
function checkIfEmpty(price) {
  if (price === undefined || price === null || price === "") {
    printError(ERROR_MESSAGES.price.NOT_ENTERED);
    return false;
  }
  return true;
}

// 숫자인지 확인
function checkIfNumeric(price) {
  if (isNaN(price)) {
    printError(ERROR_MESSAGES.price.MUST_BE_NUMERIC);
    return false;
  }
  return true;
}

// 1,000원 단위로 나누어 떨어지는지 확인
function checkIfDivisibleByThousand(price) {
  if (price % 1000 !== 0) {
    printError(ERROR_MESSAGES.price.MUST_BE_DIVISIBLE_BY_1000);
    return false;
  }
  return true;
}

// 전체 가격 유효성 검사 함수
function validatePrice(price) {
  checkIfEmpty(price);
  checkIfNumeric(price);
  checkIfDivisibleByThousand(price);
  return price;
}

export { validatePrice };
