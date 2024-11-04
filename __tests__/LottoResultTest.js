import LottoResult from '../src/models/LottoResult.js';

describe('로또 당첨 결과 확인', () => {
  let lottoResult;
  const purchasedNumbers = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  beforeEach(() => {
    lottoResult = new LottoResult(
      purchasedNumbers,
      winningNumbers,
      bonusNumber,
    );
  });

  test('결과 - 당첨 개수 확인', () => {
    lottoResult.checkResults();
    expect(lottoResult.getResults()).toEqual({
      3: 0,
      4: 0,
      5: { count: 0, bonus: 0 },
      6: 1,
    });
  });
});
