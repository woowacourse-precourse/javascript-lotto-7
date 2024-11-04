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
  if (amount <= 0) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.MONEY_DEGREE}`
    );
  }
  if (amount % 1000 !== 0) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.MONEY_DEGREE}`
    );
  }

  return amount / 1000; // 유효한 경우 구매 가능한 로또 개수를 반환
}

// 로또 번호가 6개인지 확인
function validateLottoNumbersCount(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }
}

// 로또 번호 중복 여부 확인
function validateLottoNumbersUnique(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
    );
  }
}

// 로또 번호가 1~45 범위인지 확인
function validateLottoNumbersRange(numbers) {
  if (!numbers.every((num) => num >= 1 && num <= 45)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }
}

// 로또 번호 전체 검증 함수
export function validateLottoNumbers(numbers) {
  validateLottoNumbersCount(numbers);
  validateLottoNumbersUnique(numbers);
  validateLottoNumbersRange(numbers);
}
// 당첨 번호가 6개인지 확인
function validateWinningNumbersCount(numbers) {
  if (numbers.length !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`
    );
  }
}

// 당첨 번호가 중복되지 않았는지 확인
function validateWinningNumbersUnique(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`
    );
  }
}

// 당첨 번호가 1~45 범위인지 확인
function validateWinningNumbersRange(numbers) {
  if (!numbers.every((num) => num >= 1 && num <= 45)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }
}

// 당첨 번호 전체 검증
export function validateWinningNumbers(numbers) {
  validateWinningNumbersCount(numbers);
  validateWinningNumbersUnique(numbers);
  validateWinningNumbersRange(numbers);
}

// 보너스 번호가 한 개만 입력되었는지 확인
function validateBonusNumberCount(bonusNumbers) {
  if (bonusNumbers.length !== 1) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.BONUS_NUMBER_INVALID_COUNT}`
    );
  }
}

// 보너스 번호가 숫자인지 확인
function validateBonusNumberIsNumber(bonusNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`
    );
  }
}

// 보너스 번호가 1~45 범위인지 확인
function validateBonusNumberRange(bonusNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.OUT_OF_RANGE}`
    );
  }
}

// 보너스 번호가 당첨 번호와 중복되지 않는지 확인
function validateBonusNumberDuplicate(bonusNumber, winningNumbers) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE}`
    );
  }
}

// 보너스 번호 전체 검증
export function validateBonusNumber(bonusNumbers, winningNumbers) {
  validateBonusNumberCount(bonusNumbers);
  const bonusNumber = bonusNumbers[0];
  validateBonusNumberIsNumber(bonusNumber);
  validateBonusNumberRange(bonusNumber);
  validateBonusNumberDuplicate(bonusNumber, winningNumbers);

  return bonusNumber; // 검증 통과한 보너스 번호 반환
}
