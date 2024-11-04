import { ERROR_MESSAGES, throwError } from "../Error/Error.js";

function validatePrice(price) {
  if (price === undefined || price === null || price === "") {
    throwError(ERROR_MESSAGES.price.NOT_ENTERED);
  }
  if (isNaN(price)) {
    throwError(ERROR_MESSAGES.price.MUST_BE_NUMERIC);
  }

  // 숫자가 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
  if (price % 1000 !== 0) {
    throwError(ERROR_MESSAGES.price.MUST_BE_DIVISIBLE_BY_1000);
  }

  return price;
}

export { validatePrice };
