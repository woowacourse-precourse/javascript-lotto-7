import Result from '../src/model/Result.js';

describe('Result 클래스 테스트', () => {
  test('당첨 비교 결과를 정상적으로 계산한다.', () => {
    const result = new Result(
      [1, 2, 3, 4, 5, 6],
      7,
      ['1,2,3,7,8,9', '10,11,12,13,14,15'],
      2000
    );
    result.winningResult();
    expect(result.getWinningRank()).toStrictEqual({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    });
  });
  test('총 수익률을 정상적으로 계산한다.', () => {
    const result = new Result(
      [1, 2, 3, 4, 5, 6],
      7,
      ['1,2,3,7,8,9', '10,11,12,13,14,15'],
      2000
    );
    result.winningResult();
    expect(result.getTotalRate()).toBe('250.0');
  });
});
