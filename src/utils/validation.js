import { ERROR_MESSAGES } from "./messages.js";

// 금액이 유효한지 검사
export function validatePurchaseAmount(input) {
  if (input === "" || input === null || input === undefined) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.EMPTY_VALUE}`
    );
  }

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

  return amount / 1000; // 유효한 경우 구매 가능한 로또 개수를 반환
}

// 로또 번호 전체 검증 함수
export function validateLottoNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }

  const uniqueNumbers = new Set();

  for (const num of numbers) {
    if (num < 1 || num > 45) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
      );
    }
    if (uniqueNumbers.has(num)) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
      );
    }
    uniqueNumbers.add(num);
  }
}
// 당첨 번호 전체 검증
export function validateWinningNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }

  const uniqueNumbers = new Set();

  for (const num of numbers) {
    if (num < 1 || num > 45) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
      );
    }
    if (uniqueNumbers.has(num)) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
      );
    }
    uniqueNumbers.add(num);
  }
}

// 보너스 번호 전체 검증 함수
export function validateBonusNumber(bonusNumbers, winningNumbers) {
  if (bonusNumbers.length !== 1) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.BONUS_NUMBER_INVALID_COUNT}`
    );
  }

  const bonusNumber = bonusNumbers[0];

  if (isNaN(bonusNumber)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`
    );
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE}`
    );
  }

  return bonusNumber; // 검증 통과한 보너스 번호 반환
}
