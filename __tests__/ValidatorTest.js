import { ERROR_MESSAGE } from '../src/constant/errorMessage.js';
import Validator from '../src/Validator.js';

describe('Validator 클래스 테스트', () => {
  test('구입 가격 유효성 검사', () => {
    expect(() => {
      Validator.price('ab');
    }).toThrow(ERROR_MESSAGE.NUMBER_PRICE);

    expect(() => {
      Validator.price(900);
    }).toThrow(ERROR_MESSAGE.MIN_PRICE);

    expect(() => {
      Validator.price(10000000);
    }).toThrow(ERROR_MESSAGE.MAX_PRICE);

    expect(() => {
      Validator.price(1100);
    }).toThrow(ERROR_MESSAGE.UNIT_PRICE);
  });

  test('당첨 번호 유효성 검사', () => {
    expect(() => {
      Validator.winningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LENGTH_WINNING_NUMBERS);

    expect(() => {
      Validator.winningNumbers([1, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_WINNIG_NUMBERS);

    expect(() => {
      Validator.winningNumbers(['ab', 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.INTEGER_WINNING_NUMBERS);

    expect(() => {
      Validator.winningNumbers([50, 45, 1, 2, 3, 5]);
    }).toThrow(ERROR_MESSAGE.RANGE_WINNING_NUMBERS);
  });

  test('보너스 번호 유효성 검사', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(() => {
      Validator.bonusNumber(winningNumbers, 'ab');
    }).toThrow(ERROR_MESSAGE.INTEGER_BONUS_NUMBER);

    expect(() => {
      Validator.bonusNumber(winningNumbers, 100);
    }).toThrow(ERROR_MESSAGE.RANGE_BONUS_NUMBER);

    expect(() => {
      Validator.bonusNumber(winningNumbers, 6);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  });
});
