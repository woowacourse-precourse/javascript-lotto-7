import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test.each([
    [5000, [0, 0, 0, 1, 0], '600000.0'],
    [30000, [1, 0, 1, 0, 0], '5016.7'],
    [15000, [0, 0, 0, 0, 1], '13333333.3'],
  ])('수익률 계산 테스트', (purchaseAmount, winningResult, expected) => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.calculateReturn(purchaseAmount, winningResult)).toEqual(
      expected,
    );
  });
});
