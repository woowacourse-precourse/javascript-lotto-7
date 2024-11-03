import Lotto from '../src/models/Lotto';

describe('당첨 번호 테스트', () => {
  /// /////////////////////// 올바른 입력 ///////////////////////////////
  test('올바른 당첨 번호가 주어지면 Lotto 인스턴스가 생성된다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(winningNumbers);

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getNumbers()).toEqual(winningNumbers);
  });

  /// //////////////////////// 입력 오류 //////////////////////////////
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
  test.each([
    [['a', 'b', 'c'], '[ERROR]'], // 문자가 포함됨
    [[], '[ERROR]'], // 빈 배열
    [[1, 2, 3, 4, 5, 6, 53], '[ERROR]'], // 범위 초과
    [[0, 1, 2, 3, 4, 5], '[ERROR]'], // 범위 미달
  ])('당첨 번호 %j 에 대해 예외가 발생해야 한다.', input => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR]');
  });
});
