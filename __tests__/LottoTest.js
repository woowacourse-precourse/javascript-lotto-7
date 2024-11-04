import Lotto from '../src/Lotto.js';

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
  const RANK_SUCCESS_CASES = [
    [[1, 2, 3, 4, 5, 6], 7, 1],
    [[1, 2, 3, 10, 17, 20], 7, 5],
    [[1, 2, 3, 4, 5, 7], 6, 2],
  ];
  test.each(RANK_SUCCESS_CASES)(
    '1~5등 순위 결과 성공 테스트',
    (winningNumbers, bonusNumber, rank) => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const RankResult = lotto.getRankResult(winningNumbers, bonusNumber);

      expect(RankResult).toEqual(rank);
    }
  );
});
