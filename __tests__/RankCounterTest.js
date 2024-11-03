import RankCounter from '../src/domain/RankCounter.js';

describe('등수 저장 클래스 테스트', () => {
  test.each([
    [1, [0, 0, 0, 0, 1]],
    [2, [0, 0, 0, 1, 0]],
    [3, [0, 0, 1, 0, 0]],
    [4, [0, 1, 0, 0, 0]],
    [5, [1, 0, 0, 0, 0]],
    [6, [0, 0, 0, 0, 0]],
  ])('올바른 등수 저장 테스트', (inputRank, resultRankCounter) => {
    // given
    const rankCounter = new RankCounter();

    // when
    rankCounter.increaseRankCounter(inputRank);

    // then
    expect(rankCounter.getRankCounterArray()).toStrictEqual(resultRankCounter);
  });
});
