import { WINNING_NUMBER_DELIMITER } from '../constants.js';
import { throwError } from './throwError.js';

export function isNumbersInArray(input, throwOnError = false) {
  const numbers = input.split(WINNING_NUMBER_DELIMITER);
  const condition = numbers.every((num) => !Number.isNaN(Number(num)));

  if (!condition && throwOnError) {
    throwError('모든 값은 숫자여야 합니다.');
  }

  return condition;
}

export function isNumber(input, throwOnError = false) {
  const condition = !Number.isNaN(Number(input));

  if (!condition && throwOnError) {
    throwError('숫자만 입력할 수 있습니다.');
  }

  return condition;
}

export function isNumberInRange(input, min, max, throwOnError = false) {
  const number = Number(input);
  const condition =
    !Number.isNaN(number) &&
    Number.isInteger(number) &&
    number >= min &&
    number <= max;

  if (!condition && throwOnError) {
    throwError(`${min}부터 ${max} 사이의 숫자여야 합니다.`);
  }

  return condition;
}
