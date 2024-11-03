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

  describe.each([[[1, 2, 3, 4, 5, 6], [7]]])(
    '로또 추첨 결과 테스트 ( 당첨번호 : %s 보너스번호 : %s ',
    (winningNumber, bonusNumber) => {
      test.each([
        [[1, 2, 3, 4, 5, 6], 6, false],
        [[1, 2, 3, 4, 5, 7], 5, true],
        [[1, 2, 3, 4, 5, 8], 5, false],
        [[1, 2, 3, 4, 8, 9], 4, false],
        [[1, 2, 3, 8, 9, 10], 3, false],
      ])(' 입력 : %s 결과 : %s )', (lottoNumbers, expectedMatchCount, expectedMatchBonus) => {
        const { matchCount, matchBonus } = new Lotto(lottoNumbers).draw(winningNumber, bonusNumber);

        expect(matchCount).toBe(expectedMatchCount);
        expect(matchBonus).toBe(expectedMatchBonus);
      });
    },
  );

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
