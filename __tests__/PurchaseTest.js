import Purchase from '../src/model/Purchase.js';

describe('Purchase 클래스 테스트', () => {
  test('구입 금액은 1,000원 단위로 입력해야 한다.', () => {
    const purchase = new Purchase('8000');
    expect(purchase.generateLotteryNumbers()).toHaveLength(8);
  });

  test('구입 금액을 1,000원 단위로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1500');
    }).toThrow('[ERROR]');
  });
  test('구입 금액을 1,000원 단위로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1500');
    }).toThrow('[ERROR]');
  });
  test('구입 금액을 1000원 미만으로 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('500');
    }).toThrow('[ERROR]');
  });
  test('구입 금액이 숫자가 아닌 값이면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1000j');
    }).toThrow('[ERROR]');
  });
});
