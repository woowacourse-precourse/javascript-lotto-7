import Rank from '../src/domain/Rank.js';

describe('등수 클래스 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 6], 1],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 7], 2],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 45], 3],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 44, 45], 4],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 43, 44, 45], 5],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 42, 43, 44, 45], 6],
  ])('올바른 등수 출력 테스트', (winningNumbers, bonusNumber, userNumbers, expectedRank) => {
    // when
    const rank = new Rank(winningNumbers, bonusNumber, userNumbers);

    // then
    expect(rank.getRank()).toBe(expectedRank);
  });
});
