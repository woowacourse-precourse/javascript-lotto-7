import LottoResult from '../src/model/LottoResult';

describe('로또결과 클래스 테스트', () => {
  test('케이스 1 - 로또 번호가 당첨 번호와 매칭되었을 때 각 등수에 해당하는 당첨 결과를 반환한다.', () => {
    const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const LOTTOS = [
      [10, 20, 30, 40, 41, 42],
      [1, 2, 3, 10, 17, 29],
      [1, 2, 3, 4, 5, 7],
    ];
    const RESULT = {
      5: 1,
      4: 0,
      3: 0,
      2: 1,
      1: 0,
    };

    const lottoResult = new LottoResult(
      { winningNumber: WINNING_NUMBER, bonusNumber: BONUS_NUMBER },
      LOTTOS,
    );

    expect(lottoResult.getResult()).toEqual(RESULT);
  });

  test('케이스 2 - 보너스 번호가 포함된 경우 당첨 결과를 반환한다.', () => {
    const WINNING_NUMBER = [2, 4, 7, 28, 29, 41];
    const BONUS_NUMBER = 34;
    const LOTTOS = [
      [2, 4, 5, 6, 15, 36],
      [2, 3, 7, 13, 14, 35],
      [2, 4, 7, 28, 29, 34],
    ];
    const RESULT = {
      5: 0,
      4: 0,
      3: 0,
      2: 1,
      1: 0,
    };

    const lottoResult = new LottoResult(
      { winningNumber: WINNING_NUMBER, bonusNumber: BONUS_NUMBER },
      LOTTOS,
    );

    expect(lottoResult.getResult()).toEqual(RESULT);
  });
});
