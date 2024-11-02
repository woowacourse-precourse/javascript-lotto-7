import ERROR_MESSAGES from '../src/constants/error.js';
import Validator from '../src/Validator.js';

describe('Validator 메서드 테스트', () => {
  test('구매 금액은 1000 단위 정수가 아니면 예외가 발생한다.', () => {
    expect(() => Validator.isNotDivisible(1250)).toThrow(ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  });

  test('입력 받은 번호의 갯수가 조건과 일치하지 않으면 예외가 발생한다. ', () => {
    expect(() => Validator.lengthIsNotEqual(5, 6)).toThrow(ERROR_MESSAGES.LENGTH_WINNING_NUMBERS);
    expect(() => Validator.lengthIsNotEqual(2, 1)).toThrow(ERROR_MESSAGES.LENGTH_BONUS_NUMBERS);
  });

  test('배열에 중복된 값이 있으면 예외가 발생한다. ', () => {
    expect(() => Validator.isDuplicated([1, 2, 3, 3, 4, 5])).toThrow(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
  });

  test('배열에 값이 이미 존재하면 예외가 발생한다. ', () => {
    expect(() => Validator.includedInArray([1, 2, 3, 4, 5, 6], 3)).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  });

  test('로또 및 보너스 번호가 1 ~ 45 사이를 벗어나면 예외가 발생한다. ', () => {
    expect(() => Validator.isInValidNumberRange([1, 2, 50, 4, 5, 6])).toThrow(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
  });

  test('로또 구매 금액이 100,000원을 초과하면 예외가 발생한다. ', () => {
    expect(() => Validator.isInValidPriceRange(120000)).toThrow(ERROR_MESSAGES.INVALID_PRICE_RANGE);
  });
});
