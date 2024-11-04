import { CONFIG, ERROR_MESSAGE } from "./constants.js";
import { LottoError } from "./errors.js";

export function validateNumberType(input) {
  const number = Number(input);
  if (Number.isNaN(number)) {
    throw new LottoError(ERROR_MESSAGE.INVALID_NUMBER_INPUT_TYPE);
  }
  return number;
}

export function validateEmptyInput(input) {
  if (input === undefined || input.toString().trim().length === 0) {
    throw new LottoError(ERROR_MESSAGE.INVALID_EMPTY);
  }
  return input;
}

export function validateUniqueNumbers(numbers) {
  const numberSet = new Set(numbers);
  if (numberSet.size !== numbers.length) {
    throw new LottoError(ERROR_MESSAGE.INVALID_WINNER_NUMBER);
  }
  return numbers;
}

export function validateLottoNumberLength(numbers) {
  if (numbers.length !== CONFIG.LOTTO_COUNT) {
    throw new LottoError(ERROR_MESSAGE.INVALID_WINNER_NUMBER_COUNT);
  }
  return numbers;
}

export function validateLottoNumber(number) {
  if (number < CONFIG.MIN_LOTTO_NUMBER || number > CONFIG.MAX_LOTTO_NUMBER) {
    throw new LottoError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  }
  return number;
}
