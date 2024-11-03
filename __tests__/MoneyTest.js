import { ERROR_MESSAGES } from '../src/shared/index.js';
import Money from '../src/Money.js';

describe('머니 클래스 테스트', () => {
  test('금액이 1000 단위로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Money(15000);
    }).not.toThrow();

    expect(() => {
      new Money(1501);
    }).toThrow(ERROR_MESSAGES.INVALID_AMOUNT);
  });

  test('숫자가 아닌 문자열이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      new Money('invalid');
    }).toThrow(ERROR_MESSAGES.INVALID_TYPE);
  });
});
