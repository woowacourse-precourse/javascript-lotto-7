import Money from '../src/domain/Money.js';

describe('머니 클래스 테스트', () => {
  test('올바른 로또 구입 금액 테스트', () => {
    expect(() => new Money(2000)).not.toThrow();
  });

  test.each([[''], ['money'], [1000.1], [-1000], [1001]])('로또 구입 금액 예외 테스트', (money) => {
    expect(() => new Money(money)).toThrow('[ERROR]');
  });
});
