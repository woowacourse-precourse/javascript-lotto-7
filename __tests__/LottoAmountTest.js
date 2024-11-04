import LottoAmount from '../src/model/LottoAmount.js';

describe('구입 금액 테스트', () => {
  test('구입 금액이 공백이면 예외를 발생한다.', () => {
    expect(() => {
      new LottoAmount('');
    }).toThrow('[ERROR]');
  });

  test('구입 금액에 문자가 있으면 예외를 발생한다', () => {
    expect(() => {
      new LottoAmount('1000k');
    }).toThrow('[ERROR]');
  });

  test('정수가 아닌 수를 입력할 시 예외를 발생한다', () => {
    expect(() => {
      new LottoAmount(1000.1);
    }).toThrow('[ERROR]');
  });

  test('1,000원 이하로 입력할 시 예외를 발생한다', () => {
    expect(() => {
      new LottoAmount(100);
    }).toThrow('[ERROR]');
  });

  test('1, 10, 100 자릿수 값이 있으면 예외를 발생한다.', () => {
    expect(() => {
      new LottoAmount(1111);
    }).toThrow('[ERROR]');
  });
});
