import { ERROR_MESSAGES, throwError } from "../Error/Error.js";

// 입력이 비어있는지 확인
function checkIfEmpty(price) {
  if (price === undefined || price === null || price === "") {
    throwError(ERROR_MESSAGES.price.NOT_ENTERED);
  }
}

// 숫자인지 확인
function checkIfNumeric(price) {
  if (isNaN(price)) {
    throwError(ERROR_MESSAGES.price.MUST_BE_NUMERIC);
  }
}

// 1,000원 단위로 나누어 떨어지는지 확인
function checkIfDivisibleByThousand(price) {
  if (price % 1000 !== 0) {
    throwError(ERROR_MESSAGES.price.MUST_BE_DIVISIBLE_BY_1000);
  }
}

// 전체 가격 유효성 검사 함수
function validatePrice(price) {
  checkIfEmpty(price);
  checkIfNumeric(price);
  checkIfDivisibleByThousand(price);
  return price;
}

export { validatePrice };
