import Money from '../src/validation/Money.js';
import ERROR from '../src/constants/ErrorMessage.js';

describe('구매 금액 입력값 테스트', () => {
  test('구매 금액을 입력하지 않거나 공백이라면 예외가 발생한다.', () => {
    expect(() => Money.validate('')).toThrow(`${ERROR.PREFIX + ERROR.EMPTY}`);
    expect(() => Money.validate(' ')).toThrow(`${ERROR.PREFIX + ERROR.EMPTY}`);
  });

  test('구매 금액 입력값이 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => Money.validate('exception')).toThrow(
      `${ERROR.PREFIX + ERROR.IS_NAN}`,
    );
  });

  test('구매 금액이 로또 금액보다 작다면 예외가 발생한다.', () => {
    expect(() => Money.validate('500')).toThrow(
      `${ERROR.PREFIX + ERROR.PRICE}`,
    );
    expect(() => Money.validate('0')).toThrow(`${ERROR.PREFIX + ERROR.PRICE}`);
  });

  test('구매 금액이 로또 금액 단위와 맞지 않다면 예외가 발생한다.', () => {
    expect(() => Money.validate('3280')).toThrow(
      `${ERROR.PREFIX + ERROR.UNIT}`,
    );
  });
});
