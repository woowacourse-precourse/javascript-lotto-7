import { ERROR_MESSAGES } from "./messages.js";

export function validatePurchaseAmount(input) {
  const amount = Number(input);

  if (isNaN(amount)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`
    );
  }
  if (amount % 1000 !== 0) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.MONEY_DEGREE}`
    );
  }

  return amount / 1000;
}

// 로또 번호 배열의 유효성을 확인하는 함수
export function validateLottoNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }
  if (new Set(numbers).size !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
    );
  }
  if (!numbers.every((num) => num >= 1 && num <= 45)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }
}

// 당첨 번호 유효성을 확인하는 함수
export function validateWinningNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }
  if (new Set(numbers).size !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
    );
  }
  if (!numbers.every((num) => num >= 1 && num <= 45)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }
}
