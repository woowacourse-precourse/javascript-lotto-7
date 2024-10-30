import {
  ERROR_MESSAGE,
  LOTTO_NUMBER_LENGTH,
  PRICE_RANGE,
  RANGE,
} from '../constant/constants.js';

// 구입 금액 검증 함수
export function checkNumberPrice(number) {
  if (isNaN(number)) throwError(ERROR_MESSAGE.NUMBER_PRICE);
}

export function checkMinPrice(number) {
  if (number < PRICE_RANGE.MIN) throwError(ERROR_MESSAGE.MIN_PRICE);
}

export function checkMaxPrice(number) {
  if (number > PRICE_RANGE.MAX) throwError(ERROR_MESSAGE.MAX_PRICE);
}

export function checkUnitPrice(number) {
  if (number % PRICE_RANGE.MIN !== 0) throwError(ERROR_MESSAGE.UNIT_PRICE);
}

// 당첨 번호 검증 함수
export function checkLengthWinningNumbers(winningNumbers) {
  if (winningNumbers.length !== LOTTO_NUMBER_LENGTH)
    throwError(ERROR_MESSAGE.LENGTH_WINNING_NUMBERS);
}

export function checkDuplicateWinningNumbers(winningNumbers) {
  if (new Set(winningNumbers).size !== LOTTO_NUMBER_LENGTH)
    throwError(ERROR_MESSAGE.DUPLICATE_WINNIG_NUMBERS);
}

export function checkIntegerWinningNumbers(winningNumbers) {
  winningNumbers.forEach((winningNumber) => {
    if (!isInteger(winningNumber))
      throwError(ERROR_MESSAGE.INTEGER_WINNING_NUMBERS);
  });
}

export function checkRangeWinningNumbers(winningNumbers) {
  winningNumbers.forEach((winningNumber) => {
    if (!isInRange(winningNumber))
      throwError(ERROR_MESSAGE.RANGE_WINNING_NUMBERS);
  });
}

// 보너스 번호 검증 함수
export function checkIntegerBonusNumber(bonusNumber) {
  if (!isInteger(bonusNumber)) throwError(ERROR_MESSAGE.INTEGER_BONUS_NUMBER);
}

export function checkRangeBonusNumber(bonusNumber) {
  if (!isInRange(bonusNumber)) throwError(ERROR_MESSAGE.RANGE_BONUS_NUMBER);
}

export function checkDuplicateBonusNumber(winningNumbers, bonusNumber) {
  if (new Set([...winningNumbers, bonusNumber]) !== LOTTO_NUMBER_LENGTH + 1)
    throwError(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
}

function throwError(errorMessage) {
  throw new Error(errorMessage);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function isInRange(number) {
  return number >= RANGE.MIN && number <= RANGE.MAX;
}
