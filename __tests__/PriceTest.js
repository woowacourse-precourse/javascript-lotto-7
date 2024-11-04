import Amount from '../src/models/Amount';

describe('Amount 클래스 테스트', () => {
  test('숫자가 아닌 구매 금액 입력 시 에러 발생', () => {
    expect(() => {
      new Amount('test');
    }).toThrow('[ERROR]');
  });

  test('1000원 단위가 아닌 금액 입력 시 에러 발생', () => {
    expect(() => {
      new Amount(2001);
    }).toThrow('[ERROR]');
  });

  test('1000원 단위 금액 입력 시 에러 발생하지 않음', () => {
    expect(() => {
      new Amount(2000);
    }).not.toThrow();
  });
});
