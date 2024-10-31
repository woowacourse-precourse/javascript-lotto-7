import Money from '../src/models/Money';

describe('Money 클래스 테스트', () => {
  test('입력한 구입 금액을 1000원 단위로 로또를 구매할 수 있다', () => {
    const money = new Money('5000');
    expect(money.calculateLottoCount()).toBe(5);
  });

  test('구입금액으로 숫자가 아닌 값을 입력한 경우 예외가 발생한다.', () => {
    expect(() => {
      new Money('abcd');
    }).toThrowError('[ERROR] 구매 금액으로 숫자가 아닌 값을 입력할 수 없습니다!');
  });

  test('구입금액이 1000원으로 나누어떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Money('1500');
    }).toThrowError('[ERROR] 구매 금액을 1000원 단위로 입력해 주세요!');
  });
});
