import { Money } from '../src/Money.js';
import { ERROR } from '../src/constant.js';

describe('Money 클래스 테스트', () => {
  test('1000원 단위가 아닌 금액 입력 시 예외가 발생한다', () => {
    expect(() => {
      new Money(1500);
    }).toThrow(ERROR.message);
  });

  test('금액이 0인 경우 예외가 발생한다', () => {
    expect(() => {
      new Money(0);
    }).toThrow(ERROR.message);
  });

  test('음수 금액 입력 시 예외가 발생한다', () => {
    expect(() => {
      new Money(-1000);
    }).toThrow(ERROR.message);
  });

  test('유효한 1000원 단위 금액은 예외가 발생하지 않는다', () => {
    expect(() => {
      new Money(1000);
    }).not.toThrow(ERROR.message);

    expect(() => {
      new Money(8000);
    }).not.toThrow(ERROR.message);
  });
});
